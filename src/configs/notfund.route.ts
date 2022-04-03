import { Request, Response } from 'express';

export const notfundRoute = (req: Request, res: Response, next: any) => {
	res.status(404).send({
		status: 404,
		message: 'Not Found'
	});
};

export const methodNotAllowed = (req: Request, res: Response, next: any) => {
	res.status(405).send({
		status: 405,
		message: 'Method Not Allowed'
	});
};
