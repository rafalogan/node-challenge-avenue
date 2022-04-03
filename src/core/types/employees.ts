export interface IEmployee {
	id: string;
	name: string;
	lastName: string;
	salary: number;
	age: number;
}

export interface IEmployeeDependent {
	employeeId: string;
	name: string;
	age: number;
}

export interface ITotalSalary {
	title: string;
	data: number;
}
