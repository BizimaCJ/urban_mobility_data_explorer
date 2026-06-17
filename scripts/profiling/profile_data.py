import pandas as pd

trip_file = "data/raw/yellow_tripdata_2019-01.csv"

chunk_size = 100000

print("Profiling dataset...")

total_rows = 0
missing_values = None
duplicate_rows = 0

for i, chunk in enumerate(pd.read_csv(trip_file, chunksize=chunk_size)):
    print(f"Processing chunk {i}")

    total_rows += len(chunk)

    if missing_values is None:
        missing_values = chunk.isnull().sum()
    else:
        missing_values += chunk.isnull().sum()

    duplicate_rows += chunk.duplicated().sum()

print("\nFINAL RESULTS")
print("Total rows:", total_rows)
print("\nMissing values per column:")
print(missing_values)
print("\nDuplicate rows:", duplicate_rows)
