import pandas as pd

file = "data/raw/yellow_tripdata_2019-01.csv"

fare_negative = 0
tip_negative = 0
total_negative = 0

for chunk in pd.read_csv(file, chunksize=100000):
    fare_negative += (chunk["fare_amount"] < 0).sum()
    tip_negative += (chunk["tip_amount"] < 0).sum()
    total_negative += (chunk["total_amount"] < 0).sum()

print("Negative fare_amount:", fare_negative)
print("Negative tip_amount:", tip_negative)
print("Negative total_amount:", total_negative)

