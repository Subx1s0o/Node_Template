import { Router } from 'express';
import { generateRoutes } from '@/libs/utils';
import AuthController from './auth.controller';

export const authRouter: Router = generateRoutes(AuthController);
