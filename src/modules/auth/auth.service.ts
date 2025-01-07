import { Service } from 'typedi';
import { RegisterDtoType } from './dto/register';
import { LoginDtoType } from './dto/login';

@Service()
class AuthService {
  async register(body: RegisterDtoType) {
    return body;
  }

  async login(body: LoginDtoType) {
    return body;
  }
}

export default AuthService;
