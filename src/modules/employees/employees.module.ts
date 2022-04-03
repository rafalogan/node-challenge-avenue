import { Application } from 'express';

import { EmployeesService } from 'src/services/employees.service';
import { EmployeesController } from 'src/modules/employees/employees.controller';
import { EmployeesRautes } from 'src/modules/employees/employees.rautes';

export class EmployeesModule {
	private employeesController: EmployeesController;
	private employeesRoutes: EmployeesRautes;
	constructor(app: Application, employeesService: EmployeesService) {
		this.employeesController = new EmployeesController(employeesService);
		this.employeesRoutes = new EmployeesRautes(this.employeesController, app);
	}

	exec() {
		this.employeesRoutes.initRoutes();
	}
}
