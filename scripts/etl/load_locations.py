import pandas as pd
import mysql.connector

df = pd.read_csv("data/raw/taxi_zone_lookup.csv")

conn = mysql.connector.connect(
    host="localhost",
    user="nyc_user",
    password="nyc_password",
    database="nyc_taxi"
)

cursor = conn.cursor()

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

    except Exception as e:
        print("ERROR:")
        print(e)
        break

conn.commit()

print(f"Loaded {len(df)} locations.")

cursor.close()
conn.close()
