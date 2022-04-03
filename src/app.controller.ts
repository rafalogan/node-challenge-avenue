import http from 'http';
import https, { ServerOptions } from 'https';
import { Application } from 'express';
import { onError, onInfo } from 'src/utils';

export class AppController {
	baseUrl: string;
	server?: http.Server | https.Server;

	constructor(
		private enableHttps: boolean,
		private port: number,
		private host: string,
		private app: Application,
		private httpsOptions: ServerOptions
	) {
		this.baseUrl = `http${enableHttps ? 's' : ''}://${host}:${port}`;
	}

	exec() {
		return this.enableHttps ? this.creatServerHttps() : this.creatServerHttp();
	}

	private creatServerHttp(): http.Server {
		return http
			.createServer(this.app)
			.listen(this.port)
			.on('listening', () => this.onServerUp())
			.on('error', err => this.onServerError(err));
	}

	private creatServerHttps(): https.Server {
		return https
			.createServer(this.httpsOptions, this.app)
			.listen(this.port)
			.on('listening', () => this.onServerUp())
			.on('error', err => this.onServerError(err));
	}

	private onServerUp() {
		return onInfo(`Server is up on`, this.baseUrl);
	}

	private onServerError(err: NodeJS.ErrnoException) {
		return onError('Server coneection error', err);
	}
}
