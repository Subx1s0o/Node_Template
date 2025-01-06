import 'reflect-metadata';

function Post(target: any, key: string, descriptor: PropertyDescriptor) {
  Reflect.defineMetadata('method', 'POST', target, key);
}

function Get(target: any, key: string, descriptor: PropertyDescriptor) {
  Reflect.defineMetadata('method', 'GET', target, key);
}

function Put(target: any, key: string, descriptor: PropertyDescriptor) {
  Reflect.defineMetadata('method', 'PUT', target, key);
}

function Patch(target: any, key: string, descriptor: PropertyDescriptor) {
  Reflect.defineMetadata('method', 'PUT', target, key);
}

function Delete(target: any, key: string, descriptor: PropertyDescriptor) {
  Reflect.defineMetadata('method', 'DELETE', target, key);
}
