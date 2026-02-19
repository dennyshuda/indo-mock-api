export const getRandomItem = <T>(array: T[]): T => {
	return array[Math.floor(Math.random() * array.length)];
};

export const generateFakeNIK = (provinceCode: string = "32"): string => {
	const regionCode = provinceCode + "0101";

	const day = Math.floor(Math.random() * 28) + 1;
	const month = Math.floor(Math.random() * 12) + 1;
	const year = Math.floor(Math.random() * (99 - 70) + 70);

	const isFemale = Math.random() > 0.5;
	const formattedDay = isFemale ? (day + 40).toString() : day.toString().padStart(2, "0");

	const formattedMonth = month.toString().padStart(2, "0");
	const formattedYear = year.toString();

	const sequence = Math.floor(Math.random() * 100)
		.toString()
		.padStart(4, "0");

	return `${regionCode}${formattedDay}${formattedMonth}${formattedYear}${sequence}`;
};
