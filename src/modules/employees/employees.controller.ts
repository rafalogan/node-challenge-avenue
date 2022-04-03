import { Request, Response } from 'express';

import { EmployeesService } from 'src/services/employees.service';
import { onLog, onResponseError, onResponseSuccess, orderValidate, roleValidate, sortValidate } from 'src/utils';

export class EmployeesController {
	constructor(private employeesService: EmployeesService) {}

	findAllEmployees(req: Request, res: Response) {
		try {
			sortValidate(req);
			orderValidate(req);
		} catch (error) {
			return onResponseError({ res, message: 'Invalid param', error, status: 400 });
		}

		const sort = req.params.sortProperty ? req.params.sortProperty.toLowerCase() : 'id';
		const order = req.query.order && typeof req.query.order === 'string' ? req.query?.order.toLowerCase() : 'asc';

		this.employeesService
			.getEmployees(sort, order)
			.then(employees => onResponseSuccess(res, employees))
			.catch(error => onResponseError({ res, error, message: 'internal server error', status: 500 }));
	}

	findAllAnalysts(req: Request, res: Response) {
		try {
			sortValidate(req);
			orderValidate(req);
		} catch (error) {
			return onResponseError({ res, message: 'Invalid param', error, status: 400 });
		}

		const sort = req.params.sortProperty ? req.params.sortProperty.toLowerCase() : 'id';
		const order = req.query.order && typeof req.query.order === 'string' ? req.query?.order.toLowerCase() : 'asc';

		this.employeesService
			.getAnalysts(sort, order)
			.then(analysts => onResponseSuccess(res, analysts))
			.catch(error => onResponseError({ res, error, message: 'internal server error', status: 500 }));
	}

	findAllManagers(req: Request, res: Response) {
		try {
			sortValidate(req);
			orderValidate(req);
		} catch (error) {
			return onResponseError({ res, message: 'Invalid param', error, status: 400 });
		}

		const sort = req.params.sortProperty ? req.params.sortProperty.toLowerCase() : 'id';
		const order = req.query.order && typeof req.query.order === 'string' ? req.query?.order.toLowerCase() : 'asc';

		this.employeesService
			.getManagers(sort, order)
			.then(managers => onResponseSuccess(res, managers))
			.catch(error => onResponseError({ res, error, message: 'internal server error', status: 500 }));
	}

	findTotalSalary(req: Request, res: Response) {
		try {
			roleValidate(req);
		} catch (error) {
			return onResponseError({ res, error, message: 'invalid role', status: 400 });
		}

		const role = req.params.role ? req.params.role.toLowerCase() : undefined;
		onLog('role', role);

		this.employeesService
			.getTotalSalary(role)
			.then(totalSalary => onResponseSuccess(res, totalSalary))
			.catch(error => onResponseError({ res, error, message: 'internal server error', status: 500 }));
	}
}
