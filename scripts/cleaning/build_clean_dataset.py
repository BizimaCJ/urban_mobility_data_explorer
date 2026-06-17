import pandas as pd
from pathlib import Path

RAW_DATA_PATH = "data/raw/yellow_tripdata_2019-01.csv"

OUTPUT_DIR = Path("data/clean")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

CLEAN_PATH = OUTPUT_DIR / "cleaned_trips.csv"
SAMPLE_PATH = OUTPUT_DIR / "cleaned_sample.csv"


def load_data():
    print("Loading data...")
    df = pd.read_csv(RAW_DATA_PATH)
    print("Rows loaded:", len(df))
    return df


def clean(df):
    print("Cleaning data...")

    before = len(df)

    df = df[df["fare_amount"] > 0]
    df = df[df["trip_distance"] >= 0]
    df = df[df["passenger_count"] >= 1]
    df = df[df["tpep_dropoff_datetime"] >= df["tpep_pickup_datetime"]]
    df = df[df["tpep_pickup_datetime"].astype(str).str.contains("2019")]
    df = df.drop_duplicates()

    after = len(df)

    print("Before:", before)
    print("After:", after)
    print("Removed:", before - after)

    return df


def save(df):
    print("Saving files...")

    df.to_csv(CLEAN_PATH, index=False)

    sample = df.head(5000)
    sample.to_csv(SAMPLE_PATH, index=False)

    print("Saved cleaned dataset")
    print("Saved sample dataset")


def main():
    print("Starting pipeline")

    df = load_data()
    df = clean(df)
    save(df)

    print("Done")


if __name__ == "__main__":
    main()


