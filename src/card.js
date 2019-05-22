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
