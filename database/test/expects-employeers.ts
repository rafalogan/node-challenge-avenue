export const expectedGetAnalysts = [
	{
		salary: 9208,
		age: 34,
		fullName: 'Julie Schoen'
	},
	{
		salary: 7746,
		age: 28,
		fullName: 'Maximillian Wilderman'
	}
];

export const expectedGetManager = [
	{
		salary: 8559,
		age: 24,
		fullName: 'Eleazar Harber'
	},
	{
		salary: 6676,
		age: 50,
		fullName: 'Osvaldo Ankunding'
	}
];

export const expectedAllEmployees = [
	{
		salary: 9208,
		age: 34,
		fullName: 'Julie Schoen',
		dependents: []
	},
	{
		salary: 7746,
		age: 28,
		fullName: 'Maximillian Wilderman',
		dependents: [
			{
				name: 'Eunice Mitchell',
				age: 1
			}
		]
	},
	{
		salary: 8559,
		age: 24,
		fullName: 'Eleazar Harber',
		dependents: []
	},
	{
		salary: 6676,
		age: 50,
		fullName: 'Osvaldo Ankunding',
		dependents: [
			{
				name: 'Harley Schmitt',
				age: 8
			},
			{
				name: 'Ms. Ruby Kulas',
				age: 8
			},
			{
				name: 'Scarlett Waters',
				age: 3
			}
		]
	}
];

export const expectedGetEmployees = [
	{
		salary: 7746,
		age: 28,
		fullName: 'Maximillian Wilderman',
		dependents: [
			{
				name: 'Eunice Mitchell',
				age: 1
			}
		]
	},
	{
		salary: 9208,
		age: 34,
		fullName: 'Julie Schoen',
		dependents: []
	},
	{
		salary: 8559,
		age: 24,
		fullName: 'Eleazar Harber',
		dependents: []
	},
	{
		salary: 6676,
		age: 50,
		fullName: 'Osvaldo Ankunding',
		dependents: [
			{
				name: 'Harley Schmitt',
				age: 8
			},
			{
				name: 'Ms. Ruby Kulas',
				age: 8
			},
			{
				name: 'Scarlett Waters',
				age: 3
			}
		]
	}
];

export const expectedGetTotalSalary = {
	title: 'Total salary of analysts and managers',
	data: 32189
};
export const expectedGetTotalSalaryAnalyst = {
	title: 'Total salary of analysts',
	data: 16954
};
export const expectedGetTotalSalaryManager = {
	title: 'Total salary of managers',
	data: 15235
};
