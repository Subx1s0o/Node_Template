import 'reflect-metadata';

import { Router } from 'express';

function generateRoutes(controller: any): Router {
  const router = Router();
  const controllerInstance = new controller();

  // Перебираємо всі методи класу
  const methods = Object.getOwnPropertyNames(controller.prototype);

  methods.forEach((method) => {
    const methodType = Reflect.getMetadata(
      'method',
      controller.prototype,
      method
    );

    // Якщо метод не має метаданих для методу, пропускаємо
    if (!methodType) return;

    // Додаємо маршрут до роутера
    router[methodType.toLowerCase()](method, (req, res) => {
      controllerInstance[method](req, res);
    });
  });

  return router;
}
