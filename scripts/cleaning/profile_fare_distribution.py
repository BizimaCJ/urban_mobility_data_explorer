import pandas as pd

FILE_PATH = "data/raw/yellow_tripdata_2019-01.csv"
CHUNK_SIZE = 100000

max_fare = float("-inf")
count_over_1000 = 0
count_over_5000 = 0
count_over_10000 = 0

for chunk in pd.read_csv(FILE_PATH, chunksize=CHUNK_SIZE):
    fares = chunk["fare_amount"]

    max_fare = max(max_fare, fares.max())

    count_over_1000 += (fares > 1000).sum()
    count_over_5000 += (fares > 5000).sum()
    count_over_10000 += (fares > 10000).sum()

print(f"Maximum fare: {max_fare}")
print(f"Fares > 1000: {count_over_1000}")
print(f"Fares > 5000: {count_over_5000}")
print(f"Fares > 10000: {count_over_10000}")

