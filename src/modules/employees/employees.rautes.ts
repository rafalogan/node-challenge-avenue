import { AbstractRoutes } from 'src/core';
import { Application } from 'express';
import { EmployeesController } from 'src/modules/employees/employees.controller';
import { methodNotAllowed } from 'src/configs/notfund.route';

export class EmployeesRautes extends AbstractRoutes {
	constructor(private employesController: EmployeesController, app: Application) {
		super(app);
	}

	initRoutes() {
		this.app
			.route('/employees')
			.get(this.employesController.findAllEmployees.bind(this.employesController))
			.post(methodNotAllowed)
			.put(methodNotAllowed)
			.delete(methodNotAllowed)
			.purge(methodNotAllowed);
		this.app
			.route('/employees/:sortProperty')
			.get(this.employesController.findAllEmployees.bind(this.employesController))
			.post(methodNotAllowed)
			.put(methodNotAllowed)
			.delete(methodNotAllowed)
			.purge(methodNotAllowed);

		this.app
			.route('/managers')
			.get(this.employesController.findAllManagers.bind(this.employesController))
			.post(methodNotAllowed)
			.put(methodNotAllowed)
			.delete(methodNotAllowed)
			.purge(methodNotAllowed);
		this.app
			.route('/managers/:sortProperty')
			.get(this.employesController.findAllManagers.bind(this.employesController))
			.post(methodNotAllowed)
			.put(methodNotAllowed)
			.delete(methodNotAllowed)
			.purge(methodNotAllowed);

		this.app
			.route('/analysts')
			.get(this.employesController.findAllAnalysts.bind(this.employesController))
			.post(methodNotAllowed)
			.put(methodNotAllowed)
			.delete(methodNotAllowed)
			.purge(methodNotAllowed);
		this.app
			.route('/analysts/:sortProperty')
			.get(this.employesController.findAllAnalysts.bind(this.employesController))
			.post(methodNotAllowed)
			.put(methodNotAllowed)
			.delete(methodNotAllowed)
			.purge(methodNotAllowed);

		this.app
			.route('/total-salary')
			.get(this.employesController.findTotalSalary.bind(this.employesController))
			.post(methodNotAllowed)
			.put(methodNotAllowed)
			.delete(methodNotAllowed)
			.purge(methodNotAllowed);
		this.app
			.route('/total-salary/:role')
			.get(this.employesController.findTotalSalary.bind(this.employesController))
			.post(methodNotAllowed)
			.put(methodNotAllowed)
			.delete(methodNotAllowed)
			.purge(methodNotAllowed);
	}
}
