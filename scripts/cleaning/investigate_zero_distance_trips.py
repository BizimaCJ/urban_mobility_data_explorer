import pandas as pd

FILE_PATH = "data/raw/yellow_tripdata_2019-01.csv"
CHUNK_SIZE = 100000

samples = []

for chunk in pd.read_csv(FILE_PATH, chunksize=CHUNK_SIZE):
    zero_distance = chunk[chunk["trip_distance"] == 0]

    if not zero_distance.empty:
        samples.append(
            zero_distance[
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


