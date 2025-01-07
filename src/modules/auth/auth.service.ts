import { Service } from 'typedi';
import { Request, Response } from 'express';

@Service()
class AuthService {
  async register(req: Request, res: Response) {
    return req.body;
  }

  async login(req: Request, res: Response) {
    return res.send('login');
  }
}

export default AuthService;
