/**
 * @param {string|Date} input DateTimeString or Date object
 */
function getDateTimeNumber(input = new Date()) {
	const date = typeof input === 'string' ? new Date(input) : input;
	if (!isValidDate(date)) {
		throw Error('Invalid Date');
	}
	return {
		YY: date.getFullYear(),
		MM: date.getMonth(),
		DD: date.getDate(),
		hh: date.getHours(),
		mm: date.getMinutes(),
		ss: date.getSeconds(),
	};
}

/**
 * @param {string|Date} input DateTimeString or Date object
 */
function formatDateTime(input = new Date()) {
	const { YY, MM, DD, hh, mm, ss } = getDateTimeNumber(input);
	/** @type {(n: number) => string} */
	const fill = (n: any) => n.toString().padStart(2, '0');
	return { YY: YY.toString(), MM: fill(MM + 1), DD: fill(DD), hh: fill(hh), mm: fill(mm), ss: fill(ss) };
}

/**
 * @param {any} x
 * @returns {boolean}
 */
function isValidDate(x: any) {
	if (Object.prototype.toString.call(x) === '[object Date]') {
		return !isNaN(x);
	}
	return false;
}

export { getDateTimeNumber, formatDateTime };
