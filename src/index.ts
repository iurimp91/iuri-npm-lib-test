import { AppService } from './app.service';

function sayHello(): string {
  console.log('Hello from lib!');
  return 'Hello from lib!';
}

export { sayHello, AppService };
