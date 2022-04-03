import { IEmployeeDependent } from 'src/core/types';

export class Dependent implements IEmployeeDependent {
	employeeId: string;
	name: string;
	age: number;

	constructor(depentent: IEmployeeDependent) {
		this.employeeId = depentent.employeeId;
		this.name = depentent.name;
		this.age = Number(depentent.age);
	}
}
