import { EmployeesService } from '../../src/services/employees.service';
import { expectedAllEmployees, expectedGetAnalysts, expectedGetManager } from '../../database/test';

describe('EmployeeService', () => {
	let service: EmployeesService;

	beforeEach(() => (service = new EmployeesService()));

	it('Should a get Analysts', async () => {
		const result = await service.getAnalysts();

		expect(result).toEqual(expectedGetAnalysts);
	});

	it('Should a get Managers Order By Name DESC', async () => {
		const result = await service.getManagers('name', 'DESC');

		expect(result).toEqual(expectedGetManager);
	});

	it('Should a get Employees of company', async () => {
		const result = await service.getEmployees();

		expect(result).toEqual(expectedAllEmployees);
	});

	it('Should a get total salary of Analysts', async () => {
		const result = await service.getTotalSalary('analyst');
		const expected = {
			title: 'Total salary of analysts',
			data: 16954
		};

		expect(result).toEqual(expected);
	});

	it('Should a get total salary of Managers', async () => {
		const result = await service.getTotalSalary('manager');
		const expected = {
			title: 'Total salary of managers',
			data: 15235
		};

		expect(result).toEqual(expected);
	});

	it('Should a get total salary of Employees', async () => {
		const result = await service.getTotalSalary();
		const expected = {
			title: 'Total salary of analysts and managers',
			data: 32189
		};

		expect(result).toEqual(expected);
	});
});
