import { notFoundHandler } from './../libs/middlewares/notFoundHandler';
console.clear();

import express from 'express';
import { authRouter } from './modules/auth/auth.route';
import { Logger } from '@/libs/utils';
import ConfigService from '@/libs/config/config.service';
import { configDotenv } from 'dotenv';
import { usersRouter } from './modules/users/users.route';

import { errorHandler } from '@/libs/middlewares/errorHandler';

configDotenv();
const app = express();
const logger = new Logger();
const config = new ConfigService();
const PORT = config.get('PORT', '3000');

app.use(express.json());

app.use(authRouter);
app.use(usersRouter);

app.use('*', notFoundHandler);

app.use(errorHandler);

app.listen(PORT, () => {
  logger.log(`Server running on port ${PORT}`);
});
