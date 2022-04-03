import express, { Application } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

import { employeesService } from 'src/services/services.module';
import { AppConfigOptions } from 'src/core';
import { EmployeesModule } from 'src/modules/employees/employees.module';
import { methodNotAllowed, notfundRoute } from 'src/configs/notfund.route';

export class AppConfig {
	private _express: Application;
	private environment: string;

	constructor(options: AppConfigOptions) {
		this._express = express();
		this.environment = options.environment;

		this.exec();
	}

	get express(): Application {
		return this._express;
	}

	exec() {
		this.configExpress();
		this.initModules();
	}

	private configExpress() {
		this.express.use(cors());
		this.express.use(morgan(this.environment !== 'production' ? 'dev' : 'combined'));
		this.express.use(bodyParser.urlencoded({ extended: false }));
		this.express.use(bodyParser.json());
	}

	private initModules() {
		new EmployeesModule(this.express, employeesService).exec();
		this.express.use(notfundRoute);
	}
}
