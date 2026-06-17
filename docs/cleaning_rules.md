# Data Cleaning Rules — NYC Taxi Dataset

## 1. Time Validity Rules

- Keep only records where `tpep_pickup_datetime` and `tpep_dropoff_datetime` are valid timestamps
- Remove records where:
  - dropoff time is earlier than pickup time
- Keep only records within the target year:
  - year must be 2019
- Drop records with clearly invalid years (e.g., 2001, 2003, 2088)

---

## 2. Fare Validity Rules

- Remove records where `fare_amount <= 0`
- Keep such records only if explicitly justified by system-level explanation (rare edge cases)

- Flag extreme fare values for outlier handling:
  - values that are unreasonably high compared to dataset distribution

---

## 3. Distance Validity Rules

- Remove records where `trip_distance < 0`

- Flag for removal or correction:
  - extreme distances that are not plausible within NYC geography (e.g., > 100 miles unless justified)

---

## 4. Passenger Count Rules

- Remove records where `passenger_count < 1`

- Treat `passenger_count > 6` as suspicious:
  - either remove or flag depending on analysis needs

---

## 5. Zero Value Rules

- Allow `trip_distance = 0` only if:
  - `fare_amount = 0` OR system-defined base fare explanation applies

- Remove cases where:
  - `trip_distance = 0` AND `fare_amount > 0` without justification

---

## 6. Payment Type Rules

- Retain all known payment type codes present in dataset

- Do not delete records solely based on unusual payment types
- Instead, document unexpected values for analysis

---

## 7. Outlier Handling Strategy (must be applied consistently)

Choose and apply ONE method across all numeric fields:

- Percentile trimming (recommended: 1st–99th percentile), OR
- IQR method (1.5 × interquartile range), OR
- Fixed threshold caps (only if justified by domain knowledge)

No mixing methods across fields.

---

## 8. Data Integrity Rules

- Remove duplicate rows based on full row duplication
- Ensure consistency across:
  - fare_amount
  - total_amount
  - tip_amount

---

## Final Rule

If a record violates multiple rules, it is removed rather than partially corrected unless explicitly handled in the pipeline.

