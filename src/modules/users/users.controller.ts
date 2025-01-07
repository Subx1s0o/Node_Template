import { Controller, Get } from '@/libs/decorators';
import { Service } from 'typedi';
import UsersService from './users.service';
import { Request, Response } from 'express';

@Service()
@Controller('/users')
class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/')
  async index(req: Request, res: Response) {
    return res.send(req.body);
  }

  @Get('/register')
  async register(req: Request, res: Response) {
    return await this.usersService.register(req, res);
  }

  @Get('/login')
  async login(req: Request, res: Response) {
    return await this.usersService.login(req, res);
  }
}

export default UsersController;
