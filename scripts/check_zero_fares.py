import pandas as pd

file = "data/raw/yellow_tripdata_2019-01.csv"

count = 0

for chunk in pd.read_csv(file, chunksize=100000):
    count += (chunk["fare_amount"] == 0).sum()

print("Trips with zero fare:", count)


