import React from 'react';
import Card from './card.js';

const CardList = ({ robots }) => {
	// if (true) {
	// 	throw new Error('An Error Has Occured Check your Code!');
	// }
	// UNCOMMENT CODE FOR PRODUCTION
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
