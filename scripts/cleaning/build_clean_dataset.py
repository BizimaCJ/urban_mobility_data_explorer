import pandas as pd
from pathlib import Path

RAW_DATA_PATH = "data/raw/yellow_tripdata_2019-01.csv"

OUTPUT_DIR = Path("data/clean")
LOG_DIR = Path("data/logs")
LOG_DIR.mkdir(parents=True, exist_ok=True)
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

    summary = []

    negative_fares = df[df["fare_amount"] <= 0]
    negative_fares.to_csv(LOG_DIR / "negative_fares.csv", index=False)
    summary.append(["negative_fares", len(negative_fares)])
    df = df[df["fare_amount"] > 0]

    invalid_distance = df[df["trip_distance"] < 0]
    invalid_distance.to_csv(LOG_DIR / "invalid_distances.csv", index=False)
    summary.append(["invalid_distances", len(invalid_distance)])
    df = df[df["trip_distance"] >= 0]

    invalid_passengers = df[df["passenger_count"] < 1]
    invalid_passengers.to_csv(LOG_DIR / "invalid_passenger_counts.csv", index=False)
    summary.append(["invalid_passenger_counts", len(invalid_passengers)])
    df = df[df["passenger_count"] >= 1]

    invalid_timestamps = df[
        df["tpep_dropoff_datetime"] < df["tpep_pickup_datetime"]
    ]
    invalid_timestamps.to_csv(
        LOG_DIR / "invalid_timestamps.csv",
        index=False
    )
    summary.append(["invalid_timestamps", len(invalid_timestamps)])
    df = df[
        df["tpep_dropoff_datetime"] >= df["tpep_pickup_datetime"]
    ]

    invalid_years = df[
        ~df["tpep_pickup_datetime"].astype(str).str.contains("2019")
    ]
    invalid_years.to_csv(
        LOG_DIR / "invalid_years.csv",
        index=False
    )
    summary.append(["invalid_years", len(invalid_years)])
    df = df[
        df["tpep_pickup_datetime"].astype(str).str.contains("2019")
    ]

    duplicates = df[df.duplicated()]
    duplicates.to_csv(
        LOG_DIR / "duplicate_records.csv",
        index=False
    )
    summary.append(["duplicate_records", len(duplicates)])
    df = df.drop_duplicates()

    invalid_ratecodes = df[
        ~df["RatecodeID"].isin([1, 2, 3, 4, 5, 6])
    ]
    invalid_ratecodes.to_csv(
        LOG_DIR / "invalid_ratecodes.csv",
        index=False
    )
    summary.append(["invalid_ratecodes", len(invalid_ratecodes)])
    df = df[df["RatecodeID"].isin([1, 2, 3, 4, 5, 6])]

    df = df[df["VendorID"].isin([1, 2])]
    df = df[df["payment_type"].isin([1, 2, 3, 4, 5, 6])]
    df = df.dropna(
        subset=["VendorID", "RatecodeID", "payment_type"]
    )


    pickup = pd.to_datetime(df["tpep_pickup_datetime"])
    dropoff = pd.to_datetime(df["tpep_dropoff_datetime"])

    df["trip_duration_minutes"] = (
        dropoff - pickup
    ).dt.total_seconds() / 60

    df["average_speed_mph"] = (
        df["trip_distance"] /
        (df["trip_duration_minutes"] / 60)
    )

    df["fare_per_mile"] = (
        df["fare_amount"] /
        df["trip_distance"].replace(0, pd.NA)
    )

    after = len(df)

    summary.append(["rows_before", before])
    summary.append(["rows_after", after])
    summary.append(["rows_removed", before - after])

    pd.DataFrame(
        summary,
        columns=["issue", "count"]
    ).to_csv(
        LOG_DIR / "cleaning_summary.csv",
        index=False
    )

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


