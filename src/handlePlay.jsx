export function handlePlay(nextSquares) {
	const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
	setHistory(nextHistory);
	setCurrentMove(nextHistory.length - 1);
}
