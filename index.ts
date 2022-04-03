import './src/utils/module-alias';
import { appController } from './src/server';

(async () => appController.exec())();
