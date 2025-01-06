<<<<<<< Updated upstream
import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

// Middleware для парсингу JSON
app.use(express.json());

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
=======
import express from 'express';

import { authRouter } from './modules/auth/auth.route';

const app = express();

app.use(authRouter);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
>>>>>>> Stashed changes
});
