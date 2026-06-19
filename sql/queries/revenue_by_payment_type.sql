SELECT
    p.payment_name,
    ROUND(SUM(t.total_amount), 2) AS total_revenue
FROM trips t
JOIN payment_types p
    ON t.payment_type_id = p.payment_type_id
GROUP BY p.payment_type_id, p.payment_name
ORDER BY total_revenue DESC;
