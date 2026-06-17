from pathlib import Path
import pandas as pd

BASE_DIR = Path(__file__).resolve().parents[2]
RAW_DATA_PATH = BASE_DIR / "data" / "raw" / "yellow_tripdata_2019-01.csv"
OUTPUT_PATH = BASE_DIR / "data" / "clean" / "cleaned_trips.csv"

def load_data():
    print("Loading data...")
    return pd.read_csv(RAW_DATA_PATH)

def remove_invalid_rows(df):
    df = df.copy()

    # remove impossible values
    df = df[df["fare_amount"] > 0]
    df = df[df["trip_distance"] >= 0]

    # drop rows with missing critical fields
    df = df.dropna(subset=["tpep_pickup_datetime", "tpep_dropoff_datetime"])

    return df

def fix_types(df):
    df = df.copy()

    df["tpep_pickup_datetime"] = pd.to_datetime(df["tpep_pickup_datetime"])
    df["tpep_dropoff_datetime"] = pd.to_datetime(df["tpep_dropoff_datetime"])

    return df

def add_basic_features(df):
    df = df.copy()

    duration = (
        df["tpep_dropoff_datetime"] - df["tpep_pickup_datetime"]
    ).dt.total_seconds() / 60

    df["trip_duration_min"] = duration
    df["speed_mph"] = df["trip_distance"] / (duration / 60)

    return df

def save_data(df):
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    df.to_csv(OUTPUT_PATH, index=False)

def main():
    df = load_data()
    df = fix_types(df)
    df = remove_invalid_rows(df)
    df = add_basic_features(df)
    save_data(df)


if __name__ == "__main__":
    print("Pipeline started")
    main()


