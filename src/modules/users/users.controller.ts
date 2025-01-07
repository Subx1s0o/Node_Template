import { Controller, Get } from '@/libs/decorators';
import { Service } from 'typedi';
import UsersService from './users.service';

@Service()
@Controller('/users')
class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/')
  async index(req: any, res: any) {
    return res.send('index');
  }

  @Get('/register')
  async register(req: any, res: any) {
    return await this.usersService.register(req, res);
  }

  @Get('/login')
  async login(req: any, res: any) {
    return await this.usersService.login(req, res);
  }
}

export default UsersController;
