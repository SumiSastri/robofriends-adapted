import React from 'react';

const ScrollyBar = (props) => {
	return <div style={{ overflowY: 'scroll', border: '2px solid red', height: '1000px' }}>{props.children}</div>;
};

export default ScrollyBar;
