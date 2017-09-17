function sleepTime(strStart, strEnd) {
	
	const arrStart = strStart.split(':');
	const arrEnd = strEnd.split(':');

	let dateStart = new Date();
	let dateEnd = new Date();

	dateStart.setHours(+arrStart[0]);
	dateStart.setMinutes(+arrStart[1]);

	dateEnd.setHours(+arrEnd[0]);
	dateEnd.setMinutes(+arrEnd[1]);

	let buff = dateEnd.now() - dateStart.now();

	let a = new Date(buff);

	return a.parse();
}

const strStart = '05:10';
const strEnd = '06:10';

console.log(sleepTime(strStart, strEnd));
