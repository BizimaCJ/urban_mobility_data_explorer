import pandas as pd
import mysql.connector

df = pd.read_csv("data/raw/taxi_zone_lookup.csv")

df["Zone"] = df["Zone"].fillna("Unknown")
df["service_zone"] = df["service_zone"].fillna("Unknown")

conn = mysql.connector.connect(
    host="localhost",
    user="nyc_user",
    password="nyc_password",
    database="nyc_taxi"
)

cursor = conn.cursor()

inserted = 0

for _, row in df.iterrows():
    try:
        cursor.execute(
            """
            INSERT IGNORE INTO locations (
                location_id,
                borough,
                zone,
                service_zone
            )
            VALUES (%s, %s, %s, %s)
            """,
            (
                int(row["LocationID"]),
                row["Borough"],
                row["Zone"],
                row["service_zone"]
            )
        )

        if cursor.rowcount == 1:
            inserted += 1

    except mysql.connector.Error as e:
        print(f"Error: {e}")
        break

conn.commit()

print(f"Inserted {inserted} locations.")

cursor.close()
conn.close()
