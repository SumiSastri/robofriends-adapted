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
