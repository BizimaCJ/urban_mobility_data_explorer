import pandas as pd

FILE_PATH = "data/raw/yellow_tripdata_2019-01.csv"
CHUNK_SIZE = 100000

largest_fares = []
largest_distances = []

for chunk in pd.read_csv(FILE_PATH, chunksize=CHUNK_SIZE):
    largest_fares.append(
        chunk.nlargest(
            10,
            "fare_amount"
        )[
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

    largest_distances.append(
        chunk.nlargest(
            10,
            "trip_distance"
        )[
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

top_fares = (
    pd.concat(largest_fares)
    .nlargest(20, "fare_amount")
)

top_distances = (
    pd.concat(largest_distances)
    .nlargest(20, "trip_distance")
)

print("\nTOP FARES\n")
print(top_fares.to_string(index=False))

print("\nTOP DISTANCES\n")
print(top_distances.to_string(index=False))


