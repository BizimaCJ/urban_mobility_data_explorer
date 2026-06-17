import pandas as pd

file = "data/raw/yellow_tripdata_2019-01.csv"

null_count = 0
value_counts = {}

for chunk in pd.read_csv(file, chunksize=100000):
    null_count += chunk["congestion_surcharge"].isna().sum()

    values = chunk["congestion_surcharge"].dropna().value_counts()

    for value, count in values.items():
        value_counts[value] = value_counts.get(value, 0) + count

print("NULL:", null_count)

for value, count in sorted(value_counts.items()):
    print(f"{value}: {count}")


