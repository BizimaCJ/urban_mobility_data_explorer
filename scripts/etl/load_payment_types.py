import mysql.connector

payment_types = [
    (1, "Credit Card"),
    (2, "Cash"),
    (3, "No Charge"),
    (4, "Dispute"),
    (5, "Unknown"),
    (6, "Voided Trip")
]

conn = mysql.connector.connect(
    host="localhost",
    user="nyc_user",
    password="nyc_password",
    database="nyc_taxi"
)

cursor = conn.cursor()

inserted = 0

for pt in payment_types:
    cursor.execute("""
        INSERT IGNORE INTO payment_types (
            payment_type_id,
            payment_name
        )
        VALUES (%s, %s)
    """, pt)

    if cursor.rowcount == 1:
        inserted += 1

conn.commit()

print(f"Inserted {inserted} payment types.")

cursor.close()
conn.close()
