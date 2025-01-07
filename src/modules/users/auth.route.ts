import { Router } from 'express';
import { generateRoutes } from '@/libs/utils';
import AuthController from './users.controller';

export const authRouter: Router = generateRoutes(AuthController);
