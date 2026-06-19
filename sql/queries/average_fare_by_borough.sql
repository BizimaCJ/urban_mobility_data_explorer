SELECT
    CASE
        WHEN borough IS NULL OR borough = ''
        THEN 'Outside NYC'
        ELSE borough
    END AS borough,
    ROUND(AVG(t.fare_amount), 2) AS average_fare
FROM trips t
JOIN locations l
    ON t.pickup_location_id = l.location_id
GROUP BY borough
ORDER BY average_fare DESC;
