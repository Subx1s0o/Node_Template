import 'reflect-metadata';

import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';

// Тип для HTTP методів (GET, POST, PUT, DELETE, PATCH)
type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';

// Тип для контролера. Це може бути будь-який клас з методами.
type ControllerType = { new (...args: any[]): any };

// Тип для екземпляра контролера. Він визначає інстанс класу контролера.
type ControllerInstance = InstanceType<ControllerType>;

/**
 * Генерує маршрути для Express з використанням декораторів на класах і методах.
 * Ця функція приймає клас контролера, який містить методи з декораторами для HTTP методів і шляхів.
 * Вона створює маршрути для кожного методу в контролері і повертає об'єкт Router.
 *
 * @param controller - клас контролера з методами, які використовують декоратори для HTTP методів і шляхів.
 * @returns Router - маршрутизатор Express з доданими маршрутами для кожного методу контролера.
 */
export function generateRoutes(controller: ControllerType): Router {
  const router = Router();
  // Отримуємо глобальний шлях контролера (зазначено через декоратор @Controller)
  const controllerPath: string = Reflect.getMetadata('path', controller);

  // Отримуємо екземпляр контролера за допомогою TypeDI (Dependency Injection)
  const controllerInstance: ControllerInstance = Container.get(controller);

  // Отримуємо всі методи класу контролера (включаючи constructor, який потрібно пропустити)
  const methods = Object.getOwnPropertyNames(controller.prototype);

  // Проходимо по всіх методах контролера
  methods.forEach((method) => {
    if (method === 'constructor') return;

    // Отримуємо HTTP метод для поточного методу (get, post і т.д.)
    const methodType: HttpMethod = Reflect.getMetadata(
      'method', // ключ для метаданих
      controller.prototype, // прототип класу контролера
      method // поточний метод
    );

    // Отримуємо шлях для поточного методу
    const path = Reflect.getMetadata('path', controller.prototype, method);

    // Перевіряємо, чи є тип HTTP методу та шлях для цього методу
    if (methodType && path) {
      // Формуємо повний шлях для маршруту, комбінуючи шлях контролера і шлях методу
      const fullPath = `${controllerPath}${path}`;

      // Перевіряємо, чи є метод у router для цього HTTP методу
      if (router[methodType]) {
        // Додаємо маршрут до Express маршрутизатора
        console.log(` ${method}: ${methodType.toUpperCase()} ${fullPath}`);
        router[methodType](
          fullPath,
          (req: Request, res: Response, next: NextFunction) => {
            // Викликаємо відповідний метод контролера
            controllerInstance[method](req, res, next);
          }
        );
      } else {
        // Якщо метод не є валідним HTTP методом, виводимо помилку
        console.error(
          `Method ${methodType} is not a valid HTTP method on router`
        );
      }
    } else {
      // Якщо для методу немає метаданих (методу типу або шляху), виводимо помилку
      console.error(`Missing metadata for method: ${method}`);
    }
  });

  // Повертаємо маршрутизатор з усіма згенерованими маршрутами
  return router;
}
