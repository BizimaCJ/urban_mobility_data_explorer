import pandas as pd

FILE_PATH = "data/raw/yellow_tripdata_2019-01.csv"
OUTPUT_FILE = "data/negative_fare_sample.csv"
CHUNK_SIZE = 100000

samples = []

for chunk in pd.read_csv(FILE_PATH, chunksize=CHUNK_SIZE):
    negative_fares = chunk[chunk["fare_amount"] < 0]

    if not negative_fares.empty:
        samples.append(negative_fares)

sample = pd.concat(samples).head(500)

sample.to_csv(OUTPUT_FILE, index=False)

print(f"Saved {len(sample)} records to {OUTPUT_FILE}")

