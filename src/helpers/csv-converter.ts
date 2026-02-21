export const convertToCSV = (data: any[]) => {
	if (data.length === 0) return "";

	const headers = Object.keys(data[0]).join(",");

	const rows = data.map((obj) => {
		return Object.values(obj)
			.map((val) => `"${val}"`)
			.join(",");
	});

	return [headers, ...rows].join("\n");
};
