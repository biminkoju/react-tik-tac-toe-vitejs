// import { useState } from 'react';
import './index.css';
import PropTypes from 'prop-types';

export function Square({ value, onSquareClick }) {
	return (
		<>
			<button className="square" onClick={onSquareClick}>
				{value}
			</button>
		</>
	);
}

Square.propTypes = {
	value: PropTypes.any.required,
	onSquareClick: PropTypes.func.isRequired,
};
