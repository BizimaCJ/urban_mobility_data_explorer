import pandas as pd

FILE_PATH = "data/raw/yellow_tripdata_2019-01.csv"
CHUNK_SIZE = 100000

payment_counts = {}

for chunk in pd.read_csv(FILE_PATH, chunksize=CHUNK_SIZE):
    negative_fares = chunk[chunk["fare_amount"] < 0]

    counts = negative_fares["payment_type"].value_counts()

    for payment_type, count in counts.items():
        payment_counts[payment_type] = payment_counts.get(payment_type, 0) + count

print("\nNegative fare records by payment type:\n")

for payment_type, count in sorted(
    payment_counts.items(),
    key=lambda x: x[1],
    reverse=True
):
    print(f"Payment Type {payment_type}: {count}")

