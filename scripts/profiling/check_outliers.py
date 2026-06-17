import pandas as pd

file = "data/raw/yellow_tripdata_2019-01.csv"

top_fares = []
top_distances = []

for chunk in pd.read_csv(file, chunksize=100000):
    top_fares.append(chunk.nlargest(10, "fare_amount")[["fare_amount"]])
    top_distances.append(chunk.nlargest(10, "trip_distance")[["trip_distance"]])

fares = pd.concat(top_fares).nlargest(10, "fare_amount")
distances = pd.concat(top_distances).nlargest(10, "trip_distance")

print("Top fares:")
print(fares)

print("\nTop distances:")
print(distances)


