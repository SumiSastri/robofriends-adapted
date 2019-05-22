import React, { Component } from 'react';
import CardList from './cardlist';
import SearchBox from './searchbox';
import { robots } from './robots';

// stateful component - properties come from state
// state here is the robots and searchbox
// these two properties - robots and search are passed to children
// the props robots and search change when the parent changes state of the props
// they can not change in the child components
// therefore this app is the parent of all the key components

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: robots,
			searchfield: ''
		};
	}

	onSearchChange = (event) => {
		// console.log(event.target.value);
		this.setState({ searchfield: event.target.value });
	};

	render() {
		const filteredRobots = this.state.robots.filter((robots) => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		// console.log(filteredRobots);
		return (
			<div className="tc bg dark-blue bg-light-red">
				<h1>Robot Friends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<CardList robots={filteredRobots} />
			</div>
		);
	}
}
export default App;
