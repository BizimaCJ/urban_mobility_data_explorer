import mysql.connector

rate_codes = [
    (1, "Standard rate"),
    (2, "JFK"),
    (3, "Newark"),
    (4, "Nassau or Westchester"),
    (5, "Negotiated fare"),
    (6, "Group ride")
]

conn = mysql.connector.connect(
    host="localhost",
    user="nyc_user",
    password="nyc_password",
    database="nyc_taxi"
)

cursor = conn.cursor()

inserted = 0

for rc in rate_codes:
    cursor.execute("""
        INSERT IGNORE INTO rate_codes (
            rate_code_id,
            rate_code_name
        )
        VALUES (%s, %s)
    """, rc)

    if cursor.rowcount == 1:
        inserted += 1

conn.commit()

print(f"Inserted {inserted} rate codes.")

cursor.close()
conn.close()

