package com.lawrence.currencyfair.foreignExchange;

import org.springframework.data.jpa.repository.JpaRepository;
import com.lawrence.currencyfair.foreignExchange.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
}
