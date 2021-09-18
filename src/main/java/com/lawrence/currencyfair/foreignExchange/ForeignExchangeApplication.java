package com.lawrence.currencyfair.foreignExchange;

//import java.sql.SQLException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ForeignExchangeApplication {

//	@Bean(initMethod = "start", destroyMethod = "stop")
//	public Server inMemoryH2DatabaseaServer() throws SQLException {
//		return null;
//	}
	
	public static void main(String[] args) {
		SpringApplication.run(ForeignExchangeApplication.class, args);
	}

}
