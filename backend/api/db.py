from config import db_config

class TripQueries:
    """All SQL queries for the trips API"""
    
    @staticmethod
    def trips_by_hour():
        """Get trip count by hour of day"""
        query = """
            SELECT 
                HOUR(pickup_datetime) AS hour_of_day,
                COUNT(*) AS trip_count,
                AVG(fare_amount) AS avg_fare,
                AVG(trip_distance) AS avg_distance
            FROM trips
            GROUP BY HOUR(pickup_datetime)
            ORDER BY hour_of_day ASC
        """
        return db_config.execute_query(query)
    
    @staticmethod
    def top_pickup_zones(limit=10):
        """Get top pickup zones by trip count"""
        query = """
            SELECT 
                l.zone,
                l.borough,
                COUNT(*) AS pickup_count,
                AVG(t.fare_amount) AS avg_fare
            FROM trips t
            JOIN locations l ON t.pickup_location_id = l.location_id
            GROUP BY t.pickup_location_id, l.zone, l.borough
            ORDER BY pickup_count DESC
            LIMIT %s
        """
        return db_config.execute_query(query, (limit,))
    
    @staticmethod
    def top_dropoff_zones(limit=10):
        """Get top dropoff zones by trip count"""
        query = """
            SELECT 
                l.zone,
                l.borough,
                COUNT(*) AS dropoff_count,
                AVG(t.fare_amount) AS avg_fare
            FROM trips t
            JOIN locations l ON t.dropoff_location_id = l.location_id
            GROUP BY t.dropoff_location_id, l.zone, l.borough
            ORDER BY dropoff_count DESC
            LIMIT %s
        """
        return db_config.execute_query(query, (limit,))
    
    @staticmethod
    def revenue_by_payment_type():
        """Get total revenue by payment type"""
        query = """
            SELECT 
                pt.payment_name,
                COUNT(*) AS trip_count,
                ROUND(SUM(t.total_amount), 2) AS total_revenue,
                ROUND(AVG(t.total_amount), 2) AS avg_fare
            FROM trips t
            JOIN payment_types pt ON t.payment_type_id = pt.payment_type_id
            GROUP BY t.payment_type_id, pt.payment_name
            ORDER BY total_revenue DESC
        """
        return db_config.execute_query(query)
    
    @staticmethod
    def fares_by_borough():
        """Get average fare by borough (pickup location)"""
        query = """
            SELECT 
                l.borough,
                COUNT(*) AS trip_count,
                ROUND(AVG(t.fare_amount), 2) AS avg_fare,
                ROUND(AVG(t.trip_distance), 2) AS avg_distance,
                ROUND(AVG(t.total_amount), 2) AS avg_total
            FROM trips t
            JOIN locations l ON t.pickup_location_id = l.location_id
            WHERE l.borough IS NOT NULL AND l.borough != ''
            GROUP BY l.borough
            ORDER BY avg_fare DESC
        """
        return db_config.execute_query(query)
    
    @staticmethod
    def get_all_trips(limit=100):
        """Get sample of trips with location names"""
        query = """
            SELECT 
                t.trip_id,
                t.pickup_datetime,
                t.dropoff_datetime,
                t.passenger_count,
                t.trip_distance,
                t.fare_amount,
                t.total_amount,
                l1.zone AS pickup_zone,
                l1.borough AS pickup_borough,
                l2.zone AS dropoff_zone,
                l2.borough AS dropoff_borough,
                pt.payment_name,
                t.average_speed_mph,
                t.trip_duration_minutes
            FROM trips t
            JOIN locations l1 ON t.pickup_location_id = l1.location_id
            JOIN locations l2 ON t.dropoff_location_id = l2.location_id
            JOIN payment_types pt ON t.payment_type_id = pt.payment_type_id
            LIMIT %s
        """
        return db_config.execute_query(query, (limit,))