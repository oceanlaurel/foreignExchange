import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class TransactionList extends Component {

	constructor(props) {
		super(props);
		this.state = { transactions: [] };
		this.remove = this.remove.bind(this);
	}

	componentDidMount() {
		fetch('/transactions')
			.then(response => response.json())
			.then(data => this.setState({ transactions: data }));
	}

	async remove(id) {
		await fetch(`/transactions/${id}`, {
			method: 'DELETE',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}).then(() => {
			let updatedTransactions = [...this.state.transactions].filter(i => i.id !== id);
			this.setState({ transactions: updatedTransactions });
		});
	}

	render() {
		const { transactions, isLoading } = this.state;

		if (isLoading) {
			return <p>Loading...</p>;
		}

		const transactionList = transactions.map(transaction => {
			return <tr key={transaction.id}>
				<td style={{ whiteSpace: 'nowrap' }}>{transaction.trackingId}</td>
				<td>{transaction.userId}</td>
				<td>{transaction.currencyFrom}</td>
				<td>{transaction.currencyTo}</td>
				<td>{transaction.amountSell}</td>
				<td>{transaction.amountBuy}</td>
				<td>{transaction.rate}</td>
				<td>{transaction.timePlaced}</td>
				<td>{transaction.originalCountry}</td>
				<td>
					<ButtonGroup>
						<Button size="sm" color="primary" tag={Link} to={"/transactions/" + transaction.id}>Edit</Button>
						<Button size="sm" color="danger" onClick={() => this.remove(transaction.id)}>Delete</Button>
					</ButtonGroup>
				</td>
			</tr>
		});

		return (
			<div>
				<AppNavbar />
				<Container fluid>
					<div className="float-right">
						<Button color="success" tag={Link} to="/transactions/new">Add Transaction</Button>
					</div>
					<h3>Transaction</h3>
					<Table className="mt-4">
						<thead>
							<tr>
								<th width="30%">Tracking ID</th>
								<th width="30%">User ID</th>
								<th width="40%">Currency From</th>
								<th width="40%">Currency To</th>
								<th width="40%">Amount Sell</th>
								<th width="40%">Amount Buy</th>
								<th width="40%">Rate</th>
								<th width="40%">Time Placed</th>
								<th width="40%">Original Country</th>
							</tr>
						</thead>
						<tbody>
							{transactionList}
						</tbody>
					</Table>
				</Container>
			</div>
		);
	}

}
export default TransactionList;