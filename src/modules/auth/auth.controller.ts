import { Controller, Get } from '@/libs/decorators';
import { Service } from 'typedi';
import AuthService from './auth.service';

@Service()
@Controller('/auth')
class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/')
  async index(req: any, res: any) {
    return res.send('index');
  }

  @Get('/register')
  async register(req: any, res: any) {
    return await this.authService.register(req, res);
  }

  @Get('/login')
  async login(req: any, res: any) {
    return await this.authService.login(req, res);
  }
}

export default AuthController;
