-- ====================================================
-- ACID PROPERTIES: D - DURABILITY (Written in stone)
-- ====================================================

-- Durability guarantees that once a transaction has been COMMITTED, 
-- its changes are completely permanent. 
-- Even if the server loses power, crashes, or the database system restarts 
-- a millisecond after the COMMIT succeeds, the data is safe and will not be lost.

-- (Assumes `accounts` table from 11_transactions.sql exists)

-- Scenario: Shubham transfers 400 to Hitesh.
BEGIN;

    UPDATE accounts SET balance = balance - 400 WHERE owner = 'Shubham';
    UPDATE accounts SET balance = balance + 400 WHERE owner = 'Hitesh';
    
COMMIT;

-- *SUCCESS MESSAGE RETURNED TO USER (if db says COMMIT; it better be there even after disaster)*

-- 💥 [SERVER KERNEL PANIC] 
-- 🔌 [POWER CORD UNPLUGGED]
-- 🌧️ [DATA CENTER FLOODS]

-- Wait for the hard drives to be moved to a new server and powered back on...

-- ----------------------------------------------------
-- Restarting PostgreSQL...
-- Running crash recovery routines...
-- ----------------------------------------------------

-- When we log back into the database and check:
SELECT * FROM accounts;

-- Result due to Durability:
-- The transfer is fully intact because before the database returned a "Success" message 
-- for the COMMIT command, the changes were physically written to non-volatile storage 
-- (a structure in the DB engine often called the Write-Ahead Log or WAL). 
-- This guarantees the transaction survives crashes.
