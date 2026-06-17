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

