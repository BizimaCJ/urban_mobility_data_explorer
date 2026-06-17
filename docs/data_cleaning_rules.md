# Data Cleaning Rules

## Negative Monetary Values

### Finding

7,131 records contain negative fare amounts.

Most negative-fare records are associated with:

- Payment Type 3 (No Charge): 4,088 records
- Payment Type 4 (Dispute): 2,666 records

Negative totals are internally consistent with the fare calculations and do not appear random.

### Decision

Keep negative monetary records.

### Reason

These records likely represent legitimate business events such as disputes, reversals, refunds, or fare adjustments rather than data corruption.

The records preserve potentially valuable operational information and should not be removed during cleaning.

## Extreme Fare Outliers

### Finding

A very small number of records contain extremely large fare values.

Examples include:

- 623,259.86
- 355,676.98
- 36,090.30

Many of these records also contain:

- trip_distance = 0
- identical pickup and dropoff timestamps
- passenger_count = 0

Only 18 records exceed 10,000.

### Decision

Remove records with clearly impossible fare values.

### Reason

These records are extremely rare and exhibit multiple indicators of corruption.

Keeping them would distort statistical analysis and dashboard metrics.

## Zero-Distance Trips

### Finding

54,770 records have a trip_distance of 0.

Sample inspection showed that many of these records contain:

- valid pickup and dropoff timestamps
- non-zero fares
- non-zero tips
- realistic payment information

Some records appear to represent short trips, waiting charges, meter issues, cancellations, or trips that were rounded to zero distance.

### Decision

Keep zero-distance trips.

### Reason

Most sampled records appear operationally plausible and do not exhibit the characteristics of corrupted data.

Removing them would discard potentially valid taxi activity.

## Passenger Count Equal to Zero

### Finding

117,381 records contain passenger_count = 0.

Sample inspection showed that these records often contain:

- realistic trip distances
- realistic trip durations
- realistic fares
- realistic tips

The trips appear operationally valid.

### Decision

Keep records where passenger_count = 0.

### Reason

The field likely represents missing or incorrectly entered passenger information rather than invalid trips.

Removing these records would unnecessarily discard a large amount of valid taxi activity.

