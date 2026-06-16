import pandas as pd

file = "data/raw/yellow_tripdata_2019-01.csv"

counts = {}

for chunk in pd.read_csv(file, chunksize=100000):
    values = chunk["passenger_count"].value_counts()

    for value, count in values.items():
        counts[value] = counts.get(value, 0) + count

for value in sorted(counts):
    print(f"{value}: {counts[value]}")
    
