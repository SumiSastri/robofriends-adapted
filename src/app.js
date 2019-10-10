import React, { Component } from 'react';
import CardList from './app-pages/cardlist';
import SearchBox from './common/searchbox';
import ScrollyBar from './common/scroll';
import ErrorBoundary from './errorboundary';
import './index.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ robots: users }));
		// .then((users) => this.setState({}));
		// do not remove checks the loading message works
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	};

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter((robots) => {
			return robots.name.toLowerCase().includes(searchfield.toLowerCase());
		});

		return !robots.length ? (
			<div>
				<h2>Please wait this page is still loading</h2>
			</div>
		) : (
			<div className="tc bg dark-blue bg-light-red">
				<h1>Robot Friends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<ScrollyBar>
					<ErrorBoundary>
						<CardList robots={filteredRobots} />
					</ErrorBoundary>
				</ScrollyBar>
			</div>
		);
	}
}
export default App;
