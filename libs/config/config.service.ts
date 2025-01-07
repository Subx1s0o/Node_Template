import { Service } from 'typedi';
import { Logger } from '../utils';

@Service()
class ConfigService {
  constructor(private readonly logger: Logger = new Logger()) {}

  get(key: string, defaultValue: string): string {
    const value = process.env[key];
    if (value === undefined) {
      this.logger.warn(
        `Environment variable "${key}" is not defined. Using default: "${defaultValue}"`
      );
      return defaultValue;
    }
    return value;
  }
}

export default ConfigService;
