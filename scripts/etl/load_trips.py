import pandas as pd
import numpy as np
import mysql.connector

CHUNK_SIZE = 50000  # smaller, more stable batches

conn = mysql.connector.connect(
    host="localhost",
    user="nyc_user",
    password="nyc_password",
    database="nyc_taxi",
    autocommit=False
)

cursor = conn.cursor()

file_path = "data/clean/cleaned_trips.csv"

insert_query = """
    INSERT INTO trips (
        vendor_id,
        rate_code_id,
        pickup_location_id,
        dropoff_location_id,
        payment_type_id,
        pickup_datetime,
        dropoff_datetime,
        passenger_count,
        trip_distance,
        fare_amount,
        extra,
        mta_tax,
        tip_amount,
        tolls_amount,
        improvement_surcharge,
        congestion_surcharge,
        total_amount,
        trip_duration_minutes,
        average_speed_mph,
        fare_per_mile
    )
    VALUES (
        %s, %s, %s, %s, %s,
        %s, %s, %s, %s, %s,
        %s, %s, %s, %s, %s,
        %s, %s, %s, %s, %s
    )
"""

inserted_rows = 0

# faster read pattern
for chunk in pd.read_csv(file_path, chunksize=CHUNK_SIZE):

    chunk = chunk.replace([np.inf, -np.inf], np.nan)

    chunk = chunk.dropna(subset=[
        "tpep_pickup_datetime",
        "tpep_dropoff_datetime"
    ])

    records = [
        (
            r.VendorID,
            r.RatecodeID,
            r.PULocationID,
            r.DOLocationID,
            r.payment_type,
            r.tpep_pickup_datetime,
            r.tpep_dropoff_datetime,
            r.passenger_count,
            r.trip_distance,
            r.fare_amount,
            r.extra,
            r.mta_tax,
            r.tip_amount,
            r.tolls_amount,
            r.improvement_surcharge,
            r.congestion_surcharge,
            r.total_amount,
            r.trip_duration_minutes,
            r.average_speed_mph,
            r.fare_per_mile
        )
        for r in chunk.itertuples(index=False)
    ]

    cursor.executemany(insert_query, records)
    conn.commit()

    inserted_rows += len(records)

    print(f"Inserted: {inserted_rows}")

cursor.close()
conn.close()

print(f"DONE. Total rows inserted: {inserted_rows}")
