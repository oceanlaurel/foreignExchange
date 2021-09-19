import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	state = {
		transactions: []
	};

	async componentDidMount() {
		const response = await fetch('/transactions');
		const body = await response.json();
		this.setState({ transactions: body });
	}

	render() {
		const { clients } = this.state;
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<div className="App-intro">
						<h2>Transactions</h2>
						{transactions.map(transaction =>
							<div key={transaction.id}>
								{transaction.trackingId} ({transaction.userId},
                    {transaction.currencyFrom}, {transaction.currencyTo},
                    {transaction.amountSell}, {transaction.amountBuy},
                    {transaction.rate}, {transaction.timePlaced},
                    {transaction.originalCountry}
                    )
                  </div>
						)}
					</div>
				</header>
			</div>
		);
	}
}
export default App;