import mysql.connector

vendors = [
    (1, "Creative Mobile Technologies"),
    (2, "VeriFone Inc.")
]

conn = mysql.connector.connect(
    host="localhost",
    user="nyc_user",
    password="nyc_password",
    database="nyc_taxi"
)

cursor = conn.cursor()

inserted = 0

for vendor in vendors:
    cursor.execute(
        """
        INSERT IGNORE INTO vendors (
            vendor_id,
            vendor_name
        )
        VALUES (%s, %s)
        """,
        vendor
    )

    if cursor.rowcount == 1:
        inserted += 1

conn.commit()

print(f"Inserted {inserted} vendors.")

cursor.close()
conn.close()
