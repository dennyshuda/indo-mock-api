import { generateFakeNIK } from "../src/utils";
import { describe, expect, test } from "bun:test";

describe("Generator Utils", () => {
	test("NIK harus berjumlah tepat 16 karakter", () => {
		const nik = generateFakeNIK();
		expect(nik.length).toBe(16);
	});

	test("NIK harus berupa string angka", () => {
		const nik = generateFakeNIK();
		expect(/^[0-9]+$/.test(nik)).toBe(true);
	});

	test("NIK harus memiliki kode provinsi yang benar di awal", () => {
		const provinceCode = "31"; // Jakarta
		const nik = generateFakeNIK(provinceCode);
		expect(nik.startsWith("31")).toBe(true);
	});
});
