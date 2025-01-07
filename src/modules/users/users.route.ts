import { Router } from 'express';
import { generateRoutes } from '@/libs/utils';
import UsersController from './users.controller';

export const usersRouter: Router = generateRoutes(UsersController);
