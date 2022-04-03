import request from 'supertest';
import { appController } from '../../src/server';
import {
	expectedGetAnalysts,
	expectedGetEmployees,
	expectedGetManager,
	expectedGetTotalSalary,
	expectedGetTotalSalaryAnalyst,
	expectedGetTotalSalaryManager
} from '../../database/test';

describe('Test of Server Application', () => {
	let app: any;
	beforeAll(() => (app = appController.exec()));

	afterAll(() => app.close());

	it('Should return 404', async () => {
		const response = await request(app).get('/');
		const expected = { status: 404, message: 'Not Found' };

		expect(response.status).toBe(404);
		expect(response.body).toEqual(expected);
	});

	it('Should return 405 if method is not allowed', async () => {
		const response = await request(app).post('/analysts');
		const expected = { status: 405, message: 'Method Not Allowed' };

		expect(response.status).toBe(405);
		expect(response.body).toEqual(expected);
	});

	it('Should return expected data of get for /analysts', async () => {
		const response = await request(app).get('/analysts');

		expect(response.status).toBe(200);
		expect(response.body).toEqual(expectedGetAnalysts);
	});

	it('Should return expected data of get for /analysts/salary?order=asc', async () => {
		const response = await request(app).get('/analysts/salary?order=asc');

		expect(response.status).toBe(200);
		expect(response.body).toEqual(expectedGetAnalysts.reverse());
	});

	it('Should return expected data of get for /employees', async () => {
		const response = await request(app).get('/employees');

		expect(response.status).toBe(200);
		expect(response.body).toEqual(expectedGetEmployees);
	});

	it('Should return expected data of get for /managers', async () => {
		const response = await request(app).get('/managers');

		expect(response.status).toBe(200);
		expect(response.body).toEqual(expectedGetManager);
	});

	it('Should return expected data of get for /salary', async () => {
		const response = await request(app).get('/salary');

		expect(response.status).toBe(200);
		expect(response.body).toEqual(expectedGetTotalSalary);
	});

	it('Should return expected data of get for /salary/analyst', async () => {
		const response = await request(app).get('/salary/analyst');

		expect(response.status).toBe(200);
		expect(response.body).toEqual(expectedGetTotalSalaryAnalyst);
	});

	it('Should return expected data of get for /salary/manager', async () => {
		const response = await request(app).get('/salary/manager');

		expect(response.status).toBe(200);
		expect(response.body).toEqual(expectedGetTotalSalaryManager);
	});
});
