import { Controller, Post } from '@/libs/decorators';
import { Service } from 'typedi';
import AuthService from './auth.service';
import { Request, Response } from 'express';
import { validateBody } from '@/libs/utils';
import { RegisterDto, RegisterDtoType } from './dto/register';
import { LoginDto, LoginDtoType } from './dto/login';

@Service()
@Controller('/auth')
class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async register(req: Request & { body: RegisterDtoType }, res: Response) {
    const validatedBody = validateBody(RegisterDto, req.body);

    const result = await this.authService.register(validatedBody);

    return res.status(200).json(result);
  }

  @Post('/login')
  async login(req: Request & { body: LoginDtoType }, res: Response) {
    const validatedBody = validateBody(LoginDto, req.body);

    const result = await this.authService.login(validatedBody);

    return res.status(200).json(result);
  }
}

export default AuthController;
