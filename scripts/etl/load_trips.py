import pandas as pd
import mysql.connector

CHUNK_SIZE = 100000

conn = mysql.connector.connect(
    host="localhost",
    user="nyc_user",
    password="nyc_password",
    database="nyc_taxi"
)

cursor = conn.cursor()


file_path = "data/clean/cleaned_trips.csv"
inserted_rows = 0

for chunk in pd.read_csv(file_path, chunksize=CHUNK_SIZE):

    # basic cleanup
    chunk = chunk.dropna(subset=[
        "tpep_pickup_datetime",
        "tpep_dropoff_datetime"
    ])

    chunk = chunk[chunk["VendorID"].isin([1, 2])]

    for _, row in chunk.iterrows():
        cursor.execute("""
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
                total_amount
            )
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        """, (
            row["VendorID"],
            row["RatecodeID"],
            row["PULocationID"],
            row["DOLocationID"],
            row["payment_type"],
            row["tpep_pickup_datetime"],
            row["tpep_dropoff_datetime"],
            row["passenger_count"],
            row["trip_distance"],
            row["fare_amount"],
            row["extra"],
            row["mta_tax"],
            row["tip_amount"],
            row["tolls_amount"],
            row["improvement_surcharge"],
            row["congestion_surcharge"],
            row["total_amount"]
            row["trip_duration_minutes"],
            row["average_speed_mph"],
            row["fare_per_mile"],
        ))

        inserted_rows += 1

    conn.commit()
    print(f"Committed chunk. Total inserted so far: {inserted_rows}")

cursor.close()
conn.close()

print(f"Finished loading trips. Total rows inserted: {inserted_rows}")

