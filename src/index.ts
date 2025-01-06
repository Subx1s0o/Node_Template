import express from 'express';

import { authRouter } from './modules/auth/auth.route';

const app = express();

app.use(authRouter);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
