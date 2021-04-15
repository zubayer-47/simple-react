import React, { Component } from "react";

const product = [
	{
		id: 1,
		name: "Watch",
		price: 1000,
	},
	{
		id: 2,
		name: "I-Phone 11 Pro Max",
		price: 2000,
	},
	{
		id: 3,
		name: "Nokia 225",
		price: 1500,
	},
	{
		id: 4,
		name: "Cycle",
		price: 10,
	},
	{
		id: 5,
		name: "Mobile",
		price: 45,
	},
	{
		id: 6,
		name: "Samsung",
		price: 5,
	},
	{
		id: 7,
		name: "Computer",
		price: 20,
	},
	{
		id: 8,
		name: "Mac Book",
		price: 375,
	},
	{
		id: 9,
		name: "Tv",
		price: 3500,
	},
];

class App extends Component {
	state = {
		priceRange: 0,
	};

	handleChange = (event) => {
		this.setState({
			priceRange: event.target.value,
		});
	};

	render() {
		const { priceRange } = this.state;

		const products = product.map((product) => {
			if (priceRange === 0) {
				return (
					<li className="list-group-item" key={product.id}>
						<h3> {product.name} </h3>
						<span className="badge badge-danger"> {product.price} </span>
					</li>
				);
			} else {
				if (priceRange >= product.price) {
					return (
						<li className="list-group-item" key={product.id}>
							<h3> {product.name} </h3>
							<span className="badge badge-danger"> {product.price} </span>
						</li>
					);
				}
			}
		});

		return (
			<div className="container my-5">
				<div className="row">
					<div className="col-sm-6">
						<input
							type="range"
							max="2000"
							min="10"
							step="10"
							className="form-control"
							value={priceRange}
							onChange={(event) => this.handleChange(event)}
						/>
					</div>
					<div className="col-sm-6">
						<input
							type="range"
							max="2000"
							min="10"
							step="10"
							className="form-control"
							value={priceRange}
							onChange={(event) => this.handleChange(event)}
						/>
					</div>
				</div>

				<span className="badge badge-success">$ {priceRange}</span>
				<ul className="list-group mt-5">{products}</ul>
			</div>
		);
	}
}

export default App;
