import pandas as pd

file = "data/raw/yellow_tripdata_2019-01.csv"

min_duration = float("inf")
max_duration = float("-inf")
zero_duration = 0
negative_duration = 0

for chunk in pd.read_csv(
    file,
    chunksize=100000,
    parse_dates=["tpep_pickup_datetime", "tpep_dropoff_datetime"]
):
    duration = (
        chunk["tpep_dropoff_datetime"] - chunk["tpep_pickup_datetime"]
    ).dt.total_seconds()

    min_duration = min(min_duration, duration.min())
    max_duration = max(max_duration, duration.max())

    zero_duration += (duration == 0).sum()
    negative_duration += (duration < 0).sum()

print("Min duration (seconds):", min_duration)
print("Max duration (seconds):", max_duration)
print("Zero duration trips:", zero_duration)
print("Negative duration trips:", negative_duration)

