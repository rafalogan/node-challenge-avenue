import * as fs from 'fs';

import { execDotEnv, onLog } from 'src/utils';
import { AppController } from 'src/app.controller';
import { AppConfig } from 'src/configs/app.config';

execDotEnv();

const { PORT, HOST, ENABLE_HTTPS, CERT_FILE: certFile, KEY_FILE: keyFile, NODE_ENV } = process.env;

const environment = NODE_ENV || 'development';
const enableHttps = ENABLE_HTTPS === 'true';

const port = Number(PORT);
const host = HOST || 'localhost';

const cert = certFile ? fs.readFileSync(certFile) : '';
const key = keyFile ? fs.readFileSync(keyFile) : '';

const app = new AppConfig({ environment }).express;
export const appController = new AppController(enableHttps, port, host, app, { cert, key });
