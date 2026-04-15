-- ====================================================
-- ACID PROPERTIES: I - ISOLATION (No spying on WIP)
-- ====================================================

-- Isolation ensures that concurrent transactions behave as if they are executing sequentially.
-- A transaction in progress should be invisible to other transactions until it is fully committed.
-- This prevents "Dirty Reads" (reading half-finished, uncommitted data).

-- (Assumes `accounts` table from 11_transactions.sql exists)
-- Let's assume Shubham has 1000, and Hitesh has 1000.

-- To truly test this, you need two terminal windows open connecting to the same DB.
-- Here is what happens simultaneously:

-- ----------------------------------------------------
-- TERMINAL 1 (User A)
-- ----------------------------------------------------
BEGIN; 

    -- User A starts transferring 300 to Hitesh
    UPDATE accounts SET balance = balance - 300 WHERE owner = 'Shubham';
    
    -- In User A's view (inside this transaction block), Shubham's balance is now 700.
    SELECT balance FROM accounts WHERE owner = 'Shubham'; -- Returns 700

-- Wait... User A hasn't committed yet!

-- ----------------------------------------------------
-- TERMINAL 2 (User B)
-- ----------------------------------------------------
-- If User B queries the database AT THIS EXACT MOMENT, what do they see?
-- Isolation kicks in!

    -- User B checks the balance.
    SELECT balance FROM accounts WHERE owner = 'Shubham'; 
    -- Returns 1000! 
    -- Because User B is isolated from User A's uncommitted ("dirty") changes.

-- ----------------------------------------------------
-- TERMINAL 1 (User A)
-- ----------------------------------------------------
COMMIT; -- User A finalizes the transaction.

-- ----------------------------------------------------
-- TERMINAL 2 (User B)
-- ----------------------------------------------------
-- Now if User B checks again...
    SELECT balance FROM accounts WHERE owner = 'Shubham'; 
    -- Returns 700. The changes are now public because they were committed.

-- Result due to Isolation:
-- User B was protected from making decisions based on data that wasn't finalized yet.
-- (Imagine if User A eventually Rolled Back instead of Committing; if User B had seen 700, they would have been misled!)
