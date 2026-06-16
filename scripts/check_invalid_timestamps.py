import pandas as pd

file = "data/raw/yellow_tripdata_2019-01.csv"

invalid_count = 0

for chunk in pd.read_csv(
    file,
    chunksize=100000,
    parse_dates=["tpep_pickup_datetime", "tpep_dropoff_datetime"]
):
    invalid_count += (
        chunk["tpep_dropoff_datetime"]
        < chunk["tpep_pickup_datetime"]
    ).sum()

print("Trips with dropoff before pickup:", invalid_count)


