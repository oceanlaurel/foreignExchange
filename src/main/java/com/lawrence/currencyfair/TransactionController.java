package com.lawrence.currencyfair;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lawrence.currencyfair.foreignExchange.Transaction;
import com.lawrence.currencyfair.foreignExchange.TransactionRepository;

@RestController
@RequestMapping("/transactions")
public class TransactionController {

	private final TransactionRepository transactionRepository;

	public TransactionController(TransactionRepository transactionRepository) {
		this.transactionRepository = transactionRepository;
	}

//	@GetMapping
	@RequestMapping(value="getTList", method=RequestMethod.GET)
	public List<Transaction> getTransactions() {
		return transactionRepository.findAll();
	}

	@GetMapping("/{id}")
	public Transaction getTransaction(@PathVariable Long id) {
		return transactionRepository.findById(id).orElseThrow(RuntimeException::new);
	}

	@PostMapping
	public ResponseEntity createTransaction(@RequestBody Transaction transaction) throws URISyntaxException {
		Transaction savedTransaction = transactionRepository.save(transaction);
		return ResponseEntity.created(new URI("/transactions/" + savedTransaction.getId())).body(savedTransaction);
	}

	@PutMapping("/{id}")
	public ResponseEntity updateTransaction(@PathVariable Long id, @RequestBody Transaction transaction) {
		Transaction currentTransaction = transactionRepository.findById(id).orElseThrow(RuntimeException::new);
		currentTransaction.setTrackingId(transaction.getTrackingId());
		currentTransaction.setUserId(transaction.getUserId());
		
		currentTransaction.setCurrencyFrom(currentTransaction.getCurrencyFrom());
		currentTransaction.setCurrencyTo(currentTransaction.getCurrencyTo());
		
		currentTransaction.setAmountSell(currentTransaction.getAmountSell());
		currentTransaction.setAmountBuy(currentTransaction.getAmountBuy());
		
		currentTransaction.setRate(currentTransaction.getRate());
		currentTransaction.setTimePlaced(currentTransaction.getTimePlaced());
		
		currentTransaction.setOriginalCountry(currentTransaction.getOriginalCountry());

		currentTransaction = transactionRepository.save(transaction);

		return ResponseEntity.ok(currentTransaction);
	}
	
    @DeleteMapping("/{id}")
    public ResponseEntity deleteClient(@PathVariable Long id) {
    	transactionRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
	
}