import pandas as pd

FILE_PATH = "data/raw/yellow_tripdata_2019-01.csv"
CHUNK_SIZE = 100000

samples = []

for chunk in pd.read_csv(FILE_PATH, chunksize=CHUNK_SIZE):
    passenger_zero = chunk[chunk["passenger_count"] == 0]

    if not passenger_zero.empty:
        samples.append(
            passenger_zero[
                [
                    "tpep_pickup_datetime",
                    "tpep_dropoff_datetime",
                    "passenger_count",
                    "trip_distance",
                    "payment_type",
                    "fare_amount",
                    "tip_amount",
                    "total_amount",
                ]
            ]
        )

sample = pd.concat(samples).head(50)

print(sample.to_string(index=False))

