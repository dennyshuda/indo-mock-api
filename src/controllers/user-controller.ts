import { Context } from "hono";
import { datasets } from "../../data/indonesia";
import { generateFakeNIK, getRandomItem } from "../utils";
import { convertToCSV } from "../helpers/csv-converter";

const createFakeUser = () => {
	const gender = Math.random() > 0.5 ? "Laki-laki" : "Perempuan";
	const firstName =
		gender === "Laki-laki"
			? getRandomItem(datasets.firstNamesMale)
			: getRandomItem(datasets.firstNamesFemale);
	const lastName = getRandomItem(datasets.lastNames);

	return {
		full_name: `${firstName} ${lastName}`,
		gender: gender,
		nik: generateFakeNIK(),
		address: `${getRandomItem(datasets.streets)} No. ${Math.floor(Math.random() * 50)}, ${getRandomItem(datasets.cities)}`,
		phone: `0812${Math.floor(10000000 + Math.random() * 90000000)}`,
		email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${Math.floor(Math.random() * 99)}@example.id`,
		job: getRandomItem(datasets.jobs),
	};
};

export const getUser = (c: Context) => {
	try {
		const qty = parseInt(c.req.query("qty") || "1");
		const filterGender = c.req.query("gender");
		const filterJob = c.req.query("job");
		const format = c.req.query("format") || "json";

		if (isNaN(qty)) {
			throw new Error("Parameter 'qty' harus berupa angka.");
		}

		let selectedJob = filterJob;

		if (filterJob) {
			const found = datasets.jobs.find((j) => j.toLowerCase() === filterJob.toLowerCase());

			if (!found) {
				return c.json(
					{
						status: "error",
						message: `Pekerjaan '${filterJob}' tidak tersedia.`,
						available_jobs: datasets.jobs,
					},
					400,
				);
			}

			selectedJob = found;
		}

		const allowedGenders = ["Laki-laki", "Perempuan"];
		if (filterGender && !allowedGenders.includes(filterGender)) {
			return c.json(
				{
					status: "error",
					message: "Gender tidak valid. Pilih: Laki-laki atau Perempuan",
				},
				400,
			);
		}

		if (qty > 100) {
			return c.json({ status: "error", message: "Maksimal 100 data per request" }, 400);
		}

		const users = Array.from({ length: qty }, () => {
			let user = createFakeUser();

			if (filterGender) {
				user.gender = filterGender;
				user.nik = generateFakeNIK();

				user.full_name =
					filterGender === "Laki-laki"
						? `${getRandomItem(datasets.firstNamesMale)} ${getRandomItem(datasets.lastNames)}`
						: `${getRandomItem(datasets.firstNamesFemale)} ${getRandomItem(datasets.lastNames)}`;
			}

			if (filterJob) {
				user.job = filterJob;
			}

			return user;
		});

		if (format === "csv") {
			const csvData = convertToCSV(users);

			return c.body(csvData, 200, {
				"Content-Type": "text/csv; charset=utf-8",
				"Content-Disposition": 'attachment; filename="data_indofaker.csv"',
			});
		}

		return c.json({
			status: "success",
			count: qty,
			filters: { gender: filterGender, job: filterJob },
			data: qty === 1 ? users[0] : users,
		});
	} catch (error: any) {
		return c.json(
			{
				status: "error",
				message: error.message,
			},
			400,
		);
	}
};
