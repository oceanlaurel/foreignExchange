import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TransactionList from './TransactionList';
import TransactionEdit from "./TransactionEdit";

class App extends Component {

//	state = {
//		transactions: []
//	};
//
//	async componentDidMount() {
//		const response = await fetch('/transactions');
//		const body = await response.json();
//		this.setState({ transactions: body });
//	}
//
//	render() {
//		const { transactions } = this.state;
//		return (
//			<div className="App">
//				<header className="App-header">
//					<img src={logo} className="App-logo" alt="logo" />
//					<div className="App-intro">
//						<h2>Transactions</h2>
//						{transactions.map(transaction =>
//							<div key={transaction.id}>
//								{transaction.trackingId} ({transaction.userId},
//	                    {transaction.currencyFrom}, {transaction.currencyTo},
//	                    {transaction.amountSell}, {transaction.amountBuy},
//	                    {transaction.rate}, {transaction.timePlaced},
//	                    {transaction.originalCountry}
//	                    )
//	                  </div>
//						)}
//					</div>
//				</header>
//			</div>
//		);
//	}
//
	render() {
		return (
			<Router>
				<Switch>
					<Route path='/' exact={true} component={Home} />
					<Route path='/transactions' exact={true} component={TransactionList} />
					<Route path='/transactions/:id' component={TransactionEdit} />
				</Switch>
			</Router>
		)
	}

}
export default App;