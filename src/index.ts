import { Hono } from "hono";
import { logger } from "hono/logger";
import { v1 } from "./routes/v1";
import { swaggerUI } from "@hono/swagger-ui";

const app = new Hono();

const openApiSpec = {
	openapi: "3.0.0",
	info: {
		title: "Indo-Mock API",
		version: "1.0.0",
		description: "API Data Palsu Lokal Khas Indonesia",
	},
	paths: {
		"/v1/user/random": {
			get: {
				summary: "Ambil data user Indonesia acak",
				responses: {
					200: { description: "Berhasil mengembalikan data user" },
				},
			},
		},
		"/v1/region/provinces": {
			get: {
				summary: "Daftar semua provinsi di Indonesia",
				responses: {
					200: { description: "Berhasil mengembalikan daftar provinsi" },
				},
			},
		},
	},
};

// 2. Endpoint untuk melihat spesifikasi JSON
app.get("/doc", (c) => c.json(openApiSpec));
app.get("/ui", swaggerUI({ url: "/doc" }));

app.use("*", logger());

app.route("/v1", v1);

app.get("/", (c) => c.text("Indo-Mock API is Running! 🇮🇩"));

export default app;
