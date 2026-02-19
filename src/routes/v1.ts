import { Context, Hono } from "hono";
import namesData from "../../data/names.json";
import regions from "../../data/region.json";
import { generateFakeNIK, getRandomItem } from "../utils";

const v1 = new Hono();

v1.get("/user/random", (c) => {
	const firstName = getRandomItem(namesData.first_names);
	const lastName = getRandomItem(namesData.last_names);
	const nik = generateFakeNIK();

	return c.json({
		status: "success",
		data: {
			nik: nik,
			full_name: `${firstName} ${lastName}`,
			gender: parseInt(nik.substring(6, 8)) > 40 ? "Perempuan" : "Laki-laki",
			email: `${firstName.toLowerCase()}@example.id`,
		},
	});
});

v1.get("/region/provinces", (c) => {
	return c.json({
		status: "success",
		data: regions,
	});
});

v1.get("/generate/nik", (c) => {
	const provinceId = c.req.query("province");
	const nik = generateFakeNIK(provinceId || "32");

	return c.json({
		status: "success",
		data: {
			nik: nik,
			note: "Ini adalah NIK buatan untuk keperluan testing.",
		},
	});
});

export { v1 };
