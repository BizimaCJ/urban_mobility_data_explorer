import pandas as pd

trip_file = "data/raw/yellow_tripdata_2019-01.csv"
zone_file = "data/raw/taxi_zone_lookup.csv"

print("Loading trip data...")

trip_df = pd.read_csv(trip_file, nrows=5)

print("\nTrip columns:")
print(trip_df.columns.tolist())

print("\nFirst 5 trip rows:")
print(trip_df)

print("\nLoading zone lookup...")

zone_df = pd.read_csv(zone_file)

print("\nZone columns:")
print(zone_df.columns.tolist())

print("\nFirst 5 zone rows:")
print(zone_df.head())
