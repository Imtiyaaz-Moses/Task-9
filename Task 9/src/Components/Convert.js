// This is importing the components needed to make the app work.
// React and the menu component from the components folder are being imported.
import React from 'react';
import '../App.css';

// These will be used to provide inputs for the various currencies.
const scaleNames = {
	usd: 'Dollars',
	zar: 'Rands',
	eur: 'Euros',
	pnd: 'Pounds',
};

// These functions below, are the convertions. The calculations from currency to currency.
function toRands(dollars){
	return (dollars * 15.38);
}

function toDollars(rands){
	return (rands * 0.065);
}

function toEuros(dollars){
	return (dollars * 0.90);
}

function toPounds(dollars){
	return (dollars * 0.82);
}

// Stating that this input is a number value and not an integer. The figures are also rounded off with the 'Math.round' component.
function tryConvert(currency, convert){
	const input = parseFloat(currency);
	if (Number.input) {
		return '';
	}
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString();
}

// The changes are binded, so that they can be displayed. The input box is below as well.
class CurrencyInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.onCurrencyChange(e.target.value);
	}

	render() {
		const currency = this.props.currency;
		const amount = this.props.amount;
		return (
			<fieldset>
				<legend className="currentcv">Enter amount in {scaleNames[amount]}:</legend>
				<input className="textbox" value={currency}
						onChange={this.handleChange} />
			</fieldset>
			);
	}
}

// The calculations are done here, as well as the state being set. The state also gets binded so changes can occur and be rendered.
class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.handleRandsChange = this.handleRandsChange.bind(this);
		this.handleDollarsChange = this.handleDollarsChange.bind(this);
		this.handleEurosChange = this.handleEurosChange.bind(this);
		this.handlePoundsChange = this.handlePoundsChange.bind(this);
		this.state = {currency: '', amount: 'zar'};
	}

	handleRandsChange(currency) {
		this.setState({amount: 'zar', currency});
	}

	handleDollarsChange(currency) {
		this.setState({amount: 'usd', currency});
	}

	handleEurosChange(currency) {
		this.setState({amount: 'eur', currency});
	}
	handlePoundsChange(currency) {
		this.setState({amount: 'pnd', currency});
	}

	render() {
		const amount = this.state.amount;
		const currency = this.state.currency;
		const rands = amount === 'usd' ? tryConvert(currency, toRands) : currency;
		const dollars = amount === 'zar' ? tryConvert(currency, toDollars) : currency;
		const euros = amount === 'usd' ? tryConvert(currency, toEuros) : currency;
		const pounds = amount === 'usd' ? tryConvert(currency, toPounds) : currency;

		return (
			// Displaying the inputs and changes.
			<div>
				<CurrencyInput
					amount="usd"
					currency={dollars}
					onCurrencyChange={this.handleDollarsChange}/>
				<CurrencyInput
					amount="zar"
					currency={rands}
					onCurrencyChange={this.handleRandsChange}/>
				<CurrencyInput
					amount="eur"
					currency={euros}
					onCurrencyChange={this.handleEurosChange}/>
				<CurrencyInput
					amount="pnd"
					currency={pounds}
					onCurrencyChange={this.handlePoundsChange}/>
			</div>
			);
	}
}

export default Calculator;