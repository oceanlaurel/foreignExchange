import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class TransactionEdit extends Component {

	emptyItem = {
		name: '',
		email: ''
	};

	constructor(props) {
		super(props);
		this.state = {
			item: this.emptyItem
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async componentDidMount() {
		if (this.props.match.params.id !== 'new') {
			const transaction = await (await fetch(`/transactions/${this.props.match.params.id}`)).json();
			this.setState({ item: transaction });
		}
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		let item = { ...this.state.item };
		item[name] = value;
		this.setState({ item });
	}

	async handleSubmit(event) {
		event.preventDefault();
		const { item } = this.state;

		await fetch('/transactions' + (item.id ? '/' + item.id : ''), {
			method: (item.id) ? 'PUT' : 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(item),
		});
		this.props.history.push('/transactions');
	}

	render() {
		const { item } = this.state;
		const title = <h2>{item.id ? 'Edit Transaction' : 'Add Transaction'}</h2>;


		return <div>
			<AppNavbar />
			<Container>
				{title}
				<Form onSubmit={this.handleSubmit}>
					<FormGroup>
						<Label for="name">Tracking ID</Label>
						<Input type="text" name="trackingId" id="trackingId" value={item.trackingId || ''}
							onChange={this.handleChange} autoComplete="trackingId" />
					</FormGroup>
					<FormGroup>
						<Label for="userId">User Id</Label>
						<Input type="text" name="userId" id="userId" value={item.userId || ''}
							onChange={this.handleChange} autoComplete="userId" />
					</FormGroup>
					<FormGroup>
						<Label for="currencyFrom">Currency From</Label>
						<Input type="text" name="currencyFrom" id="currencyFrom" value={item.currencyFrom || ''}
							onChange={this.handleChange} autoComplete="currencyFrom" />
					</FormGroup>
					<FormGroup>
						<Label for="currencyTo">Currency To</Label>
						<Input type="text" name="currencyTo" id="currencyTo" value={item.currencyTo || ''}
							onChange={this.handleChange} autoComplete="currencyTo" />
					</FormGroup>
					<FormGroup>
						<Label for="amountSell">Amount Sell</Label>
						<Input type="text" name="amountSell" id="amountSell" value={item.amountSell || ''}
							onChange={this.handleChange} autoComplete="amountSell" />
					</FormGroup>
					<FormGroup>
						<Label for="amountBuy">Amount Buy</Label>
						<Input type="text" name="amountBuy" id="amountBuy" value={item.amountBuy || ''}
							onChange={this.handleChange} autoComplete="amountBuy" />
					</FormGroup>
					<FormGroup>
						<Label for="rate">Rate</Label>
						<Input type="text" name="rate" id="rate" value={item.rate || ''}
							onChange={this.handleChange} autoComplete="rate" />
					</FormGroup>
					<FormGroup>
						<Label for="timePlaced">Time Placed</Label>
						<Input type="text" name="timePlaced" id="timePlaced" value={item.timePlaced || ''}
							onChange={this.handleChange} autoComplete="timePlaced" />
					</FormGroup>
					<FormGroup>
						<Label for="originalCountry">Original Country</Label>
						<Input type="text" name="originalCountry" id="originalCountry" value={item.originalCountry || ''}
							onChange={this.handleChange} autoComplete="originalCountry" />
					</FormGroup>
					<FormGroup>
						<Button color="primary" type="submit">Save</Button>{' '}
						<Button color="secondary" tag={Link} to="/transactions">Cancel</Button>
					</FormGroup>
				</Form>
			</Container>
		</div>
	}

}
export default withRouter(TransactionEdit);