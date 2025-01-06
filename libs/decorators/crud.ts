import 'reflect-metadata';

// Декоратор для методу GET
export function Get(path: string) {
  return function (classPrototype: any, methodName: string) {
    Reflect.defineMetadata('method', 'get', classPrototype, methodName);
    Reflect.defineMetadata('path', path, classPrototype, methodName);
  };
}

// Декоратор для методу POST
export function Post(path: string) {
  return function (classPrototype: any, methodName: string) {
    Reflect.defineMetadata('method', 'post', classPrototype, methodName);
    Reflect.defineMetadata('path', path, classPrototype, methodName);
  };
}

// Декоратор для методу PUT
export function Put(path: string) {
  return function (classPrototype: any, methodName: string) {
    Reflect.defineMetadata('method', 'put', classPrototype, methodName);
    Reflect.defineMetadata('path', path, classPrototype, methodName);
  };
}

// Декоратор для методу PATCH
export function Patch(path: string) {
  return function (classPrototype: any, methodName: string) {
    Reflect.defineMetadata('method', 'patch', classPrototype, methodName);
    Reflect.defineMetadata('path', path, classPrototype, methodName);
  };
}

// Декоратор для методу DELETE
export function Delete(path: string) {
  return function (classPrototype: any, methodName: string) {
    Reflect.defineMetadata('method', 'delete', classPrototype, methodName);
    Reflect.defineMetadata('path', path, classPrototype, methodName);
  };
}
