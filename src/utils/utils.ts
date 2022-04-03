import dotenv from 'dotenv';
import httpStatus from 'http-status';
import { Request, Response } from 'express';
import { ErroRsponseOpitons } from 'src/core/types/response';
import { onError } from 'src/utils/log-handler';

const isValid = !process.env.NODE_ENV || process.env.NODE_ENV !== 'production';

export const execDotEnv = () =>
	isValid ? dotenv.config(process.env.NODE_ENV === 'test' ? { path: '.env.test' } : { path: '.env' }) : null;

export const onResponseSuccess = (res: Response, data: any) => res.status(httpStatus.OK).json(data);
export const onResponseError = (options: ErroRsponseOpitons) => {
	const { res } = options;

	onError('Erro ao processar requisição: ', options.error);

	res.status((options.status ? options.status : httpStatus.INTERNAL_SERVER_ERROR) as number).json({
		status: options.status ? options.status : httpStatus.INTERNAL_SERVER_ERROR,
		error: options.message
	});
};

const validSortPropertys = ['id', 'name', 'lastName', 'salary', 'age'];

export const sortValidate = (req: Request) => {
	if (!req.params.sortProperty) return;
	if (validSortPropertys.includes(req.params.sortProperty.toLowerCase())) return;

	throw new Error('Invalid sort property');
};

export const orderValidate = (req: Request) => {
	if (!req.query.order) return;
	if (typeof req.query.order === 'string' && ['asc', 'desc'].includes(req.query.order.toLowerCase())) return;

	throw new Error('Invalid order');
};

export const roleValidate = (req: Request) => {
	if (!req.params.role) return;
	if (['analyst', 'manager'].includes(req.params.role.toLowerCase())) return;

	throw new Error('Invalid role');
};
