console.clear();

import express from 'express';

import { authRouter } from './modules/auth/auth.route';
import { Logger } from '@/libs/config/Logger/logger';

const app = express();
const logger = new Logger();

const PORT = process.env.PORT || 3000;

app.use(authRouter);

app.listen(PORT, () => {
  logger.log(`Server running on port ${PORT}`);
});
