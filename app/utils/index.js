export function className (result, conditions) {
	return (result && conditions) ? result : false;
}

export function isEmptyOrSpaces(value) {
	return value === null || value === undefined || String(value).match(/^ *$/) !== null;
}

export function getRandomArbitrary(min, max) {
	return parseInt(Math.random() * ((max - min) + min), 10);
}