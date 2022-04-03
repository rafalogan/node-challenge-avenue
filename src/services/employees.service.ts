import Analisys from '../../database/data/analysts.json';
import Managers from '../../database/data/managers.json';
import Dependents from '../../database/data/dependents.json';

import { IEmployee, IEmployeeDependent, ITotalSalary } from 'src/core/types';

import { Employee } from 'src/repositories/employee.entity';

export class EmployeesService {
	private analysts: IEmployee[] = Analisys;
	private managers: IEmployee[] = Managers;
	private dependents: IEmployeeDependent[] = Dependents;

	constructor() {}

	async getAnalysts(sortingProperty = 'id', order = 'asc'): Promise<Employee[]> {
		const result: IEmployee[] = this.sortEmployees(this.analysts, sortingProperty, order);

		return result
			.map(item => new Employee(item, this.dependents))
			.map(item => {
				Reflect.deleteProperty(item, 'dependents');
				Reflect.deleteProperty(item, 'name');
				Reflect.deleteProperty(item, 'lastName');
				Reflect.deleteProperty(item, 'id');
				return item;
			});
	}

	async getManagers(sortingProperty = 'id', order = 'asc'): Promise<Employee[]> {
		const result: IEmployee[] = this.sortEmployees(this.managers, sortingProperty, order);

		return result
			.map(item => new Employee(item, this.dependents))
			.map(item => {
				Reflect.deleteProperty(item, 'dependents');
				Reflect.deleteProperty(item, 'name');
				Reflect.deleteProperty(item, 'lastName');
				Reflect.deleteProperty(item, 'id');
				return item;
			});
	}

	async getEmployees(sortingProperty = 'id', order = 'asc'): Promise<Employee[]> {
		const result: IEmployee[] = this.sortEmployees(this.analysts.concat(this.managers), sortingProperty, order);

		return result
			.map(item => new Employee(item, this.dependents))
			.map(item => {
				Reflect.deleteProperty(item, 'name');
				Reflect.deleteProperty(item, 'lastName');
				Reflect.deleteProperty(item, 'id');
				item.dependents = item.dependents.map(dependent => {
					Reflect.deleteProperty(dependent, 'employeeId');
					return dependent;
				});
				return item;
			});
	}

	async getTotalSalary(role?: string): Promise<ITotalSalary> {
		if (role === 'analyst') {
			return {
				title: 'Total salary of analysts',
				data: this.analysts.reduce((acc, item) => acc + item.salary, 0)
			};
		}

		if (role === 'manager') {
			return {
				title: 'Total salary of managers',
				data: this.managers.reduce((acc, item) => acc + item.salary, 0)
			};
		}

		return {
			title: 'Total salary of analysts and managers',
			data: this.analysts.concat(this.managers).reduce((acc, item) => acc + item.salary, 0)
		};
	}

	private sortEmployees(employees: IEmployee[], sortingProperty: any, order: string): IEmployee[] {
		return employees.sort((a, b) => {
			if (order === 'asc') {
				// @ts-ignore
				return a[sortingProperty] - b[sortingProperty];
			} else {
				// @ts-ignore
				return b[sortingProperty] - a[sortingProperty];
			}
		});
	}
}
