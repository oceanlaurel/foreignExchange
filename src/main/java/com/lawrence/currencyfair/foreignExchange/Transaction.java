package com.lawrence.currencyfair.foreignExchange;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "transaction")
public class Transaction {

	@Id
	@GeneratedValue
	private Long id;

	private String trackingId;

	private String userId = "";

	private String currencyFrom;
	private String currencyTo;

	private Double amountSell;
	private Double amountBuy;

	private float rate;
	private Timestamp timePlaced;

	private String originalCountry;

	public Double getAmountBuy() {
		return amountBuy;
	}

	public Double getAmountSell() {
		return amountSell;
	}

	public String getCurrencyFrom() {
		return currencyFrom;
	}

	public String getCurrencyTo() {
		return currencyTo;
	}

	public Long getId() {
		return id;
	}

	public String getOriginalCountry() {
		return originalCountry;
	}

	public float getRate() {
		return rate;
	}

	public Timestamp getTimePlaced() {
		return timePlaced;
	}

	public String getTrackingId() {
		return trackingId;
	}

	public String getUserId() {
		return userId;
	}

	public void setAmountBuy(Double amountBuy) {
		this.amountBuy = amountBuy;
	}

	public void setAmountSell(Double amountSell) {
		this.amountSell = amountSell;
	}

	public void setCurrencyFrom(String currencyFrom) {
		this.currencyFrom = currencyFrom;
	}

	public void setCurrencyTo(String currencyTo) {
		this.currencyTo = currencyTo;
	}

	public void setId(Long transactionId) {
		this.id = transactionId;
	}

	public void setOriginalCountry(String originalCountry) {
		this.originalCountry = originalCountry;
	}

	public void setRate(float rate) {
		this.rate = rate;
	}

	public void setTimePlaced(Timestamp timePlaced) {
		this.timePlaced = timePlaced;
	}

	public void setTrackingId(String trackingId) {
		this.trackingId = trackingId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}
}
