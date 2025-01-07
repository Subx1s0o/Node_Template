import { Controller, Post } from '@/libs/decorators';
import { Service } from 'typedi';
import AuthService from './auth.service';
import { Request, Response } from 'express';
import { validateBody } from '@/libs/utils';
import { RegisterDto } from './dto/register';

@Service()
@Controller('/auth')
class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async register(req: Request, res: Response) {
    const validatedBody = validateBody(RegisterDto, req.body);

    const result = await this.authService.register(validatedBody, res);

    return res.status(200).json(result);
  }

  @Post('/login')
  async login(req: Request, res: Response) {
    return await this.authService.login(req, res);
  }
}

export default AuthController;
