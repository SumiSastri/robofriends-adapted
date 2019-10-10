## Robot Friends
Andrei Neagoie's The complete Web Developer 2019: Zero to Mastery [Udemy.com]
Section 19 - React & Redux

### Progression from jQuery to React.js

React is a library that enables a quick rendering of front-end components and DOM manipulation. It is good for VR, Desktop and Mobile apps as it is follows the MVC (model view control) principle. The concept of small, reusable modules makes it easy to configure SPAs (Single Page Applications) and scale them.

Data flow in  React is downstream. This results in a more efficient and more bug-free front-end. React also makes DOM manipulation easy as it creates a copy of the DOM, the virtual DOM which renders the app. Once again, this results in a more efficient app as frequent DOM interaction (as with jQuery, vanilla js) is labour intensive and more prone to code errors.

### Project set up and scaffolding

[global install in terminal] npm - g install create-react-app
create a react project folder [npm create-react-app <projectname>]
React scripts packages all the webpack/ babel transpiling in the background - check package json for dependencies installed.
Version of the package locked in to the package-lock json
git-ignore - ignores the git and node files when pushed to project

React src files - app.js and index.js helps create the single page app
index.css - the main css
index.html - the root file for the app to render

### Task 1 (Video 191-196)

Set up file structure with a front end source folder. 

1. Create a functional component for the first card - card.js - ```const Card = () => {return(<div></div>)} export default Card;```
  Consider using semantic jsx with the fragment tag [http://blog.jmes.tech/react-fragment-and-semantic-html/] - the task asks you to create a div with some h2 text and the image tag src to link as a string to an ApI [https://robohash.org]

2. To style the component install the Tachyons library into the project in the index.js file. Documentation for Tachyons [http://tachyons.io/docs/]

3. For the data create a data-file with an array of objects - create a component called robots.js, the properties of the object can be imported in and rendered as properties of the jsx element (props). The properties I created are name, description and fave food and the id.

4. Rendering props - import the file ```import { robots } from './robots';``` in ```app.js```. The file is wrapped in curly braces as it is javascript calling the data stored in the variable called robots. The h2 tag now can be changed to render props ```<h2>{props.name}</h2>``` this will now render the names of the robot.

5. Using template literals use them for the source of the image which now are a prop - so it requires the back ticks, the dollar sign and curly braces for the property id ```{`https://robohash.org/${id}?100x100`}```

6. Destructure the props by passing them as params

- initial set up for destructuring

 ```const Card = ({ props }) => {
     const Card = ({ name, description, favefood, id })
	return (<div></div>)}        
```
- props destructured

```const Card = ({ name, description, favefood, id }) ```

This is how the card component should look like by the end of this video

```
import React from 'react';
const Card = ({ name, description, favefood, id }) => {
	return (
		<div className="bg-gold dib br-pill pa3 ma2 grow bg-animate transition: background-color .15s ease-in-out tc ba bw2 shadow-6">
			<div>
				<img src={`https://robohash.org/${id}?100x100`} alt="gappy-robo" />
			</div>

			<div>
				<h2>{name}</h2>
				<p>{description}</p>
				<p>{favefood}</p>
			</div>
		</div>
	);
};

export default Card;
```
### Task 2 (Video 198)

1. Create a CardList component as a functional component.This component, imports the Card Component,  returns the index of the robots array that has been created in the robots.js file and saved in a constant and exported to this file as a deconstructed prop from the parent - app.js. 

The CardList now becomes the parent of the Card Component and needs to be imported into the Card Component.

```const CardList =() => {return(<div><h2>robots[0].name</h2>/div>)}```

2. To dynamically render the robots as 10 robots each in a Card Component, we can use the map method to render all the robots in the array.

3. The Card List Component should look like this by the end of the video - here we access the index of the array ```[i]``` and when we use it in a jsx tag like the key tag on its own use curly braces ```{i}```

```
import React from 'react';
import Card from './card.js';

const CardList = ({ robots }) => {
	return (
		<div>
			{robots.map((user, i) => {
				return (
					<Card
						key={i}
						id={robots[i].id}
						name={robots[i].name}
						favefood={robots[i].favefood}
						description={robots[i].description}
					/>
				);
			})}
		</div>
	);
};

export default CardList;
```
### Task 3 (Video 19)

We now create the parent component - app.js where data trickles down to all the child components. As data flow is top to bottom, App.js is the component that holds state and all properties are passed from state to the child components. The robots array is therefore passed from App.js to all the other child components in the app as props ```{robots}``` as we have seen.

1. Create a search box as a dumb component search.js at the beginning of the video the component looks like this:-

```
import React from 'react';

const SearchBox = () => {
	return (
		<div className="pa2">
			<input
				className="pa3  b--hot-pink bw2 br-pill bg-light-yellow"
				type="search"
				placeholder="search friends"
				onChange={}
			/>
		</div>
	);
};
export default SearchBox;

```

2. Since state will be held in the app.js component, for the searchbox to render functionality in the search input, it will need props to be passed down from app.js into the component to handle the change event - in this case the user typing a search request - and it will need to filter the items that are requested and send back the filtered items to the user. 

The search functionality will need a custom function to be written in the app.js component and handed down as a prop to the child component - the searchbox.

The search component as a functional component, is stateless and renders whatever is changed in state (in app.js) because the prop is handed down.

```
import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className="pa2">
			<input
				className="pa3  b--hot-pink bw2 br-pill bg-light-yellow"
				type="search"
				placeholder="search friends"
				onChange={searchChange}
			/>
		</div>
	);
};
export default SearchBox;

```

By the end of the video the props of ```{searchfield}``` and ```{searchChange}``` will be handed down from app.js to the searchbox.js component.

3. Creating the stateful parent App.js - classes and constructors were only added to JavaScript as it became a back-end language and is influenced by Java. A class is a type of object that with a constructor creates a blue-print that can be replicated.

```
class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: robots,
			searchfield: ''
		};
	}
  ```  

Stateful components use this method with the super method to render the jsx elements that need to be influenced by state. The jsx elements now need to use lexical this to render the leemnts

```
            <div className="tc bg dark-blue bg-light-red">
				<h1>Robot Friends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<CardList robots={this.state.robots} />
			</div>
```


Once the blue print is created, the methods in state can be handed down to child components as props. The custom-function ```onSearchChange``` for example, will handle the change that the user inputs into the search bar. The event - updating the input field will have a value that changes. State which is immutable has to be changed and therefore the ```setState method``` is called, this updates the empty value of the input to the value that the user types in the search field. Searchfield's original state is empty - therefore that is what is represented by the constructor and robots (the data from the robots array) represents the imported robots object and the data in this object.

```
	onSearchChange = (event) => {
		// console.log(event.target.value);
		this.setState({ searchfield: event.target.value });
	};
 ```

The filtering of the data of robots to match the user input requires it's own custom function. This is written inside the render method. This is because the data is taken from the input and the output - rendering of the component - is reliant on the render method of react.

```
	render() {
		const filteredRobots = this.state.robots.filter((robots) => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		// console.log(filteredRobots);
  ```      