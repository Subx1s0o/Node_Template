import { Controller, Post, Body, HttpCode } from 'routing-controllers';
import { Service } from 'typedi';
import AuthService from './auth.service';
import { validateBody } from '@/libs/utils';
import { RegisterDto, RegisterDtoType } from './dto/register';
import { Logger } from '@/global';

@Service()
@Controller('/auth')
class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly logger: Logger
  ) {}

  @Post('/register')
  @HttpCode(201)
  async register(@Body() body: RegisterDtoType) {
    const validatedBody = validateBody(RegisterDto, body);
    const result = await this.authService.register(validatedBody);
    return result;
  }
}

export default AuthController;
