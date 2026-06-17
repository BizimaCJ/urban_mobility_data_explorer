USE nyc_taxi;

CREATE TABLE locations (
    location_id INT PRIMARY KEY,
    borough VARCHAR(50) NOT NULL,
    zone VARCHAR(100) NOT NULL,
    service_zone VARCHAR(50)
);

CREATE TABLE vendors (
    vendor_id INT PRIMARY KEY,
    vendor_name VARCHAR(100) NOT NULL
);

CREATE TABLE payment_types (
    payment_type_id INT PRIMARY KEY,
    payment_name VARCHAR(50) NOT NULL
);

CREATE TABLE rate_codes (
    rate_code_id INT PRIMARY KEY,
    rate_code_name VARCHAR(100) NOT NULL
);
