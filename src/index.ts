import { swaggerUI } from "@hono/swagger-ui";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import userRoute from "./routes/user";
import { rateLimiter } from "./middlewres/rate-limit";

const app = new Hono();

app.onError((err, c) => {
	console.error(`${err.message}`);

	return c.json(
		{
			status: "error",
			message: "Terjadi kesalahan internal pada server.",
			error_detail: process.env.NODE_ENV === "development" ? err.message : undefined,
		},
		500,
	);
});

app.notFound((c) => {
	return c.json(
		{
			status: "error",
			message: "Endpoint tidak ditemukan. Cek dokumentasi di /docs",
		},
		404,
	);
});

app.use("*", rateLimiter);
app.use("/api/*", cors());
app.use("*", logger());

export const openApiSpec = {
	openapi: "3.0.0",
	info: {
		title: "IndoFaker API",
		version: "1.0.0",
		description: "API Generator Data Identitas Palsu Khusus Indonesia",
	},
	paths: {
		"/v1/user": {
			get: {
				summary: "Generate data user Indonesia",
				security: [{ ApiKeyAuth: [] }],
				parameters: [
					{
						name: "qty",
						in: "query",
						description: "Jumlah data yang diinginkan (max 100)",
						schema: { type: "integer", default: 1 },
					},
					{
						name: "format",
						in: "query",
						description: "Format output",
						schema: { type: "string", enum: ["json", "csv"], default: "json" },
					},
					{
						name: "gender",
						in: "query",
						description: "Filter jenis kelamin",
						schema: { type: "string", enum: ["Laki-laki", "Perempuan"] },
					},
					{
						name: "job",
						in: "query",
						description: "Filter pekerjaan",
						schema: { type: "string" },
					},
				],
				responses: {
					200: {
						description: "Berhasil generate data",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										status: { type: "string" },
										data: { type: "object" },
									},
								},
							},
							"text/csv": {
								schema: { type: "string", format: "binary" },
							},
						},
					},
					401: { description: "API Key tidak valid" },
				},
			},
		},
	},
};

app.get("/openapi.json", (c) => c.json(openApiSpec));
app.get("/docs", swaggerUI({ url: "/openapi.json" }));

app.route("/v1/user", userRoute);

app.get("/", (c) => c.json({ message: "IndoFaker API is Running! 🇮🇩" }));

export default app;
