import pandas as pd

file = "data/raw/yellow_tripdata_2019-01.csv"

columns = [
    "passenger_count",
    "trip_distance",
    "fare_amount",
    "tip_amount",
    "total_amount"
]

mins = {col: float("inf") for col in columns}
maxs = {col: float("-inf") for col in columns}

for chunk in pd.read_csv(file, chunksize=100000):
    for col in columns:
        mins[col] = min(mins[col], chunk[col].min())
        maxs[col] = max(maxs[col], chunk[col].max())

print("Minimum values:")
for col in columns:
    print(f"{col}: {mins[col]}")

print("\nMaximum values:")
for col in columns:
    print(f"{col}: {maxs[col]}")


