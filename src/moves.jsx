import { jumpTo } from './jumpTo';

export const moves = history.map((squares, move) => {
	let description;
	if (move > 0) {
		description = 'Go to move #' + move;
	} else {
		description = 'Go to game start';
	}
	return (
		<li key={move}>
			<button onClick={() => jumpTo(move)}>{description}</button>
		</li>
	);
});
