import pandas as pd

FILE_PATH = "data/raw/yellow_tripdata_2019-01.csv"
CHUNK_SIZE = 100000

years = {}

for chunk in pd.read_csv(
    FILE_PATH,
    usecols=["tpep_pickup_datetime"],
    chunksize=CHUNK_SIZE
):
    dates = pd.to_datetime(
        chunk["tpep_pickup_datetime"],
        errors="coerce"
    )

    counts = dates.dt.year.value_counts()

    for year, count in counts.items():
        years[year] = years.get(year, 0) + count

for year in sorted(years):
    print(f"{year}: {years[year]}")


