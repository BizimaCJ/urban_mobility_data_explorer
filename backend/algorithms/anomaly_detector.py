"""
CUSTOM ANOMALY DETECTION ALGORITHM
===================================

Detects outliers in taxi data using Z-Score analysis.
NO pandas, NO numpy, NO built-in sorting.

Problem: Detect bad data (negative fares, impossible speeds, etc.)
Solution: Statistical anomaly detection with manual calculations
"""

class AnomalyDetector:
    """Custom Anomaly Detection - No External Libraries"""
    
    def __init__(self, std_dev_threshold=3.0):
        self.std_dev_threshold = std_dev_threshold
        self.stats = {}
    
    def calculate_mean(self, values):
        """Calculate mean manually - O(n)"""
        if not values:
            return 0
        total = sum(v for v in values if v is not None)
        return total / len(values)
    
    def calculate_std_dev(self, values, mean):
        """Calculate standard deviation manually - O(n)"""
        if not values or len(values) < 2:
            return 0
        sum_squared_diff = sum((v - mean) ** 2 for v in values if v is not None)
        variance = sum_squared_diff / len(values)
        return self._sqrt(variance)
    
    def _sqrt(self, n):
        """Newton's method square root - O(log n)"""
        if n <= 0:
            return 0
        x = n
        for _ in range(10):
            x = (x + n / x) / 2
        return x
    
    def calculate_statistics(self, trips, field):
        """Calculate mean and std dev for a field - O(n)"""
        values = []
        for trip in trips:
            if field in trip and trip[field] is not None:
                try:
                    values.append(float(trip[field]))
                except:
                    pass
        
        mean = self.calculate_mean(values)
        std_dev = self.calculate_std_dev(values, mean)
        return {"mean": mean, "std_dev": std_dev, "count": len(values)}
    
    def is_anomaly(self, value, mean, std_dev):
        """Check if value is anomaly using Z-score - O(1)"""
        if std_dev == 0:
            return False, 0
        z_score = (value - mean) / std_dev
        return abs(z_score) > self.std_dev_threshold, z_score
    
    def detect_anomalies(self, trips):
        """Detect anomalies across dimensions - O(n)"""
        anomalies = []
        fields_to_check = [
            'fare_amount',
            'average_speed_mph',
            'trip_distance',
            'trip_duration_minutes'
        ]
        
        # Calculate statistics for each field
        for field in fields_to_check:
            self.stats[field] = self.calculate_statistics(trips, field)
        
        # Check each trip
        for trip in trips:
            reasons = []
            
            # Check fare_amount
            if 'fare_amount' in trip and trip['fare_amount'] is not None:
                try:
                    fare = float(trip['fare_amount'])
                    if fare < 0:
                        reasons.append(f"Negative fare: ${fare:.2f}")
                    else:
                        stats = self.stats['fare_amount']
                        if stats['std_dev'] > 0:
                            is_anom, z_score = self.is_anomaly(fare, stats['mean'], stats['std_dev'])
                            if is_anom:
                                reasons.append(f"Fare outlier (Z={z_score:.2f})")
                except:
                    pass
            
            # Check speed
            if 'average_speed_mph' in trip and trip['average_speed_mph'] is not None:
                try:
                    speed = float(trip['average_speed_mph'])
                    if speed > 100:
                        reasons.append(f"Impossible speed: {speed:.1f} mph")
                except:
                    pass
            
            # Check duration
            if 'trip_duration_minutes' in trip and trip['trip_duration_minutes'] is not None:
                try:
                    duration = float(trip['trip_duration_minutes'])
                    if duration > 360:
                        reasons.append(f"Excessive duration: {duration:.0f} min")
                except:
                    pass
            
            # Add to anomalies if issues found
            if reasons:
                anomalies.append({
                    'trip_id': trip.get('trip_id'),
                    'reasons': reasons,
                    'fare_amount': trip.get('fare_amount'),
                    'average_speed_mph': trip.get('average_speed_mph'),
                    'trip_distance': trip.get('trip_distance'),
                    'trip_duration_minutes': trip.get('trip_duration_minutes')
                })
        
        return anomalies
    
    def get_summary(self):
        """Return statistics summary"""
        return self.stats