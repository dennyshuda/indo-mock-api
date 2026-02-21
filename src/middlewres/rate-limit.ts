import { Context, Next } from "hono";

const store = new Map<string, { count: number; resetTime: number }>();

export const rateLimiter = async (c: Context, next: Next) => {
	const ip = c.req.header("x-forwarded-for") || "anonymous";
	const now = Date.now();
	const windowMs = 60 * 1000;
	const maxRequests = 20;

	const record = store.get(ip);

	if (!record || now > record.resetTime) {
		store.set(ip, { count: 1, resetTime: now + windowMs });
	} else {
		record.count++;
		if (record.count > maxRequests) {
			return c.json(
				{
					status: "error",
					message:
						"Terlalu banyak permintaan (Rate limit exceeded). Silakan coba lagi dalam satu menit.",
				},
				429,
			);
		}
	}

	await next();
};
