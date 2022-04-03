import { IEmployee, IEmployeeDependent } from 'src/core/types';
import { Dependent } from 'src/repositories/dependent.entity';

export class Employee implements IEmployee {
	id: string;
	name: string;
	lastName: string;
	salary: number;
	age: number;

	fullName?: string;
	dependents: Dependent[];

	constructor(employee: IEmployee, dependents: IEmployeeDependent[]) {
		this.id = employee.id;
		this.name = employee.name;
		this.lastName = employee.lastName;
		this.salary = Number(employee.salary);
		this.age = Number(employee.age);

		this.fullName = `${this.name} ${this.lastName}`;
		this.dependents = this.setDependents(dependents);
	}

	private setDependents(dependents: IEmployeeDependent[]) {
		return dependents.filter(dependent => dependent.employeeId === this.id).map(dependent => new Dependent(dependent));
	}
}
