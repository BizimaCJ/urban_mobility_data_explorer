SELECT
    l.zone,
    l.borough,
    COUNT(*) AS trip_count
FROM trips t
JOIN locations l
    ON t.pickup_location_id = l.location_id
GROUP BY l.location_id, l.zone, l.borough
ORDER BY trip_count DESC
LIMIT 10;
