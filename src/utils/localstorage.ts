export const setToLocalStorage = <N> (key: string, data: N) => {
	window.localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLocalStorage = <G> (key: string): G => {
	return JSON.parse(window.localStorage.getItem(key) || '{}');
};