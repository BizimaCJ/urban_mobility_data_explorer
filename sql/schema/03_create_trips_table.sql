USE nyc_taxi;

CREATE TABLE trips (
    trip_id BIGINT AUTO_INCREMENT PRIMARY KEY,

    vendor_id INT,
    rate_code_id INT,
    pickup_location_id INT,
    dropoff_location_id INT,
    payment_type_id INT,

    pickup_datetime DATETIME NOT NULL,
    dropoff_datetime DATETIME NOT NULL,

    passenger_count INT NOT NULL,
    trip_distance DECIMAL(10,2) NOT NULL,

    fare_amount DECIMAL(10,2) NOT NULL,
    extra DECIMAL(10,2),
    mta_tax DECIMAL(10,2),
    tip_amount DECIMAL(10,2),
    tolls_amount DECIMAL(10,2),
    improvement_surcharge DECIMAL(10,2),
    congestion_surcharge DECIMAL(10,2),
    total_amount DECIMAL(10,2) NOT NULL,

    trip_duration_minutes DECIMAL(10,2),
    average_speed_mph DECIMAL(10,2),
    fare_per_mile DECIMAL(10,2),

    CONSTRAINT fk_vendor
        FOREIGN KEY (vendor_id)
        REFERENCES vendors(vendor_id),

    CONSTRAINT fk_rate_code
        FOREIGN KEY (rate_code_id)
        REFERENCES rate_codes(rate_code_id),

    CONSTRAINT fk_pickup_location
        FOREIGN KEY (pickup_location_id)
        REFERENCES locations(location_id),

    CONSTRAINT fk_dropoff_location
        FOREIGN KEY (dropoff_location_id)
        REFERENCES locations(location_id),

    CONSTRAINT fk_payment_type
        FOREIGN KEY (payment_type_id)
        REFERENCES payment_types(payment_type_id)
);
