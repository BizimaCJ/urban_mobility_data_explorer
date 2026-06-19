SELECT
    HOUR(pickup_datetime) AS hour_of_day,
    COUNT(*) AS trip_count
FROM trips
GROUP BY hour_of_day
ORDER BY hour_of_day;
