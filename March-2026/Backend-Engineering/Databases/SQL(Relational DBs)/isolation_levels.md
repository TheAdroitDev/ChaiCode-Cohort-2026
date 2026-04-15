# Database Isolation Levels — A Practical Deep Dive

Isolation levels define how safely concurrent transactions interact with each other.

They balance two competing goals:

- Data Consistency
- Performance

Isolation levels are ordered from least strict to most strict:

---

## 1. Read Uncommitted

The weakest isolation level.

- Allows reading uncommitted data from other transactions
- Can lead to dirty reads

Think: "I can see your work even before you finish it."

Pros:
- Fastest

Cons:
- Unsafe (rarely used in real systems)

---

## 2. Read Committed

The most commonly used isolation level (default in PostgreSQL, SQL Server).

- Only committed data can be read
- Prevents dirty reads
- Allows non-repeatable reads

Example:
You read a row → another transaction updates it → you read again → different value

Pros:
- Good balance between performance and consistency

---

## 3. Repeatable Read

Provides stronger consistency.

- Prevents dirty reads
- Prevents non-repeatable reads
- Phantom reads may still occur

Ensures that rows read once cannot change within the same transaction.

Pros:
- Stronger guarantees than Read Committed

Cons:
- Slightly reduced concurrency

---

## 4. Serializable

The strongest isolation level.

- Simulates transactions as if executed one after another
- Prevents dirty reads, non-repeatable reads, and phantom reads

Pros:
- Maximum correctness

Cons:
- Lowest performance
- Higher chance of locks and contention

---

# Concurrency Phenomena

Isolation levels exist to prevent the following issues:

## Dirty Read
Reading data that has not been committed.

## Non-repeatable Read
Reading the same row twice and getting different values.

## Phantom Read
Re-running a query and getting new rows inserted by another transaction.

---

# Comparison Summary

| Isolation Level   | Dirty Reads | Non-repeatable Reads | Phantom Reads |
|------------------|------------|----------------------|----------------|
| Read Uncommitted | Possible   | Possible             | Possible       |
| Read Committed   | Prevented  | Possible             | Possible       |
| Repeatable Read  | Prevented  | Prevented            | Possible       |
| Serializable     | Prevented  | Prevented            | Prevented      |

---

# Implementation Notes

## Performance
Higher isolation levels increase locking and reduce concurrency.

## MySQL
- Uses InnoDB
- Default: Repeatable Read

## PostgreSQL
- Default: Read Committed
- Uses MVCC (Multi-Version Concurrency Control)

## Oracle
- Supports Read Committed and Serializable

---

# Recommended Resources

1. ANSI SQL Isolation Levels Paper (Berenson et al.)
2. PostgreSQL MVCC Documentation
3. Cockroach Labs Blog (practical explanations)
4. Google Spanner Paper
5. Amazon Dynamo Paper
6. Jepsen Testing Analyses (real-world failures)