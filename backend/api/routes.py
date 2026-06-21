from flask import Blueprint, jsonify, request
from db import TripQueries
from algorithms.anomaly_detector import AnomalyDetector

api_blueprint = Blueprint('api', __name__, url_prefix='/api')

# ==================== HEALTH CHECK ====================
@api_blueprint.route('/health', methods=['GET'])
def health_check():
    """Check if API is running"""
    return jsonify({"status": "✓ API is running"})

# ==================== TRIPS BY HOUR ====================
@api_blueprint.route('/trips/by-hour', methods=['GET'])
def trips_by_hour():
    """Get trip demand by hour of day"""
    try:
        results = TripQueries.trips_by_hour()
        if results is None:
            return jsonify({"error": "Database query failed"}), 500
        
        return jsonify({
            "endpoint": "/api/trips/by-hour",
            "description": "Trip count, average fare, and distance by hour of day",
            "data": results
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ==================== TOP PICKUP ZONES ====================
@api_blueprint.route('/trips/top-pickup-zones', methods=['GET'])
def top_pickup_zones():
    """Get top pickup zones"""
    try:
        limit = request.args.get('limit', 10, type=int)
        results = TripQueries.top_pickup_zones(limit)
        if results is None:
            return jsonify({"error": "Database query failed"}), 500
        
        return jsonify({
            "endpoint": "/api/trips/top-pickup-zones",
            "limit": limit,
            "data": results
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ==================== TOP DROPOFF ZONES ====================
@api_blueprint.route('/trips/top-dropoff-zones', methods=['GET'])
def top_dropoff_zones():
    """Get top dropoff zones"""
    try:
        limit = request.args.get('limit', 10, type=int)
        results = TripQueries.top_dropoff_zones(limit)
        if results is None:
            return jsonify({"error": "Database query failed"}), 500
        
        return jsonify({
            "endpoint": "/api/trips/top-dropoff-zones",
            "limit": limit,
            "data": results
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ==================== REVENUE BY PAYMENT TYPE ====================
@api_blueprint.route('/revenue/by-payment-type', methods=['GET'])
def revenue_by_payment_type():
    """Get revenue breakdown by payment type"""
    try:
        results = TripQueries.revenue_by_payment_type()
        if results is None:
            return jsonify({"error": "Database query failed"}), 500
        
        return jsonify({
            "endpoint": "/api/revenue/by-payment-type",
            "data": results
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ==================== FARES BY BOROUGH ====================
@api_blueprint.route('/fares/by-borough', methods=['GET'])
def fares_by_borough():
    """Get average fare by borough"""
    try:
        results = TripQueries.fares_by_borough()
        if results is None:
            return jsonify({"error": "Database query failed"}), 500
        
        return jsonify({
            "endpoint": "/api/fares/by-borough",
            "data": results
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ==================== SAMPLE TRIPS ====================
@api_blueprint.route('/trips/sample', methods=['GET'])
def sample_trips():
    """Get sample of trips with full details"""
    try:
        limit = request.args.get('limit', 100, type=int)
        results = TripQueries.get_all_trips(limit)
        if results is None:
            return jsonify({"error": "Database query failed"}), 500
        
        return jsonify({
            "endpoint": "/api/trips/sample",
            "limit": limit,
            "count": len(results) if results else 0,
            "data": results
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ==================== ANOMALY DETECTION ====================
@api_blueprint.route('/trips/anomalies', methods=['GET'])
def detect_anomalies():
    """Custom Algorithm: Detect anomalies in trip data"""
    try:
        limit = request.args.get('limit', 1000, type=int)
        
        results = TripQueries.get_all_trips(limit)
        if results is None:
            return jsonify({"error": "Database query failed"}), 500
        
        detector = AnomalyDetector(std_dev_threshold=3.0)
        anomalies = detector.detect_anomalies(results)
        stats = detector.get_summary()
        
        return jsonify({
            "endpoint": "/api/trips/anomalies",
            "algorithm": "Z-Score based outlier detection",
            "trips_analyzed": len(results) if results else 0,
            "anomalies_found": len(anomalies),
            "statistics": {
                field: {
                    "mean": round(s["mean"], 2),
                    "std_dev": round(s["std_dev"], 2),
                    "samples": s["count"]
                }
                for field, s in stats.items()
            },
            "anomalies": anomalies[:100]
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ==================== API DOCUMENTATION ====================
@api_blueprint.route('/docs', methods=['GET'])
def api_docs():
    """API documentation"""
    return jsonify({
        "title": "Urban Mobility Data Explorer API",
        "version": "1.0",
        "endpoints": [
            {"path": "/api/health", "method": "GET", "description": "Check API status"},
            {"path": "/api/trips/by-hour", "method": "GET", "description": "Trip demand by hour"},
            {"path": "/api/trips/top-pickup-zones", "method": "GET", "description": "Top pickup zones"},
            {"path": "/api/trips/top-dropoff-zones", "method": "GET", "description": "Top dropoff zones"},
            {"path": "/api/revenue/by-payment-type", "method": "GET", "description": "Revenue by payment type"},
            {"path": "/api/fares/by-borough", "method": "GET", "description": "Average fares by borough"},
            {"path": "/api/trips/sample", "method": "GET", "description": "Sample trip records"},
            {"path": "/api/trips/anomalies", "method": "GET", "description": "Anomaly detection algorithm"}
        ]
    })