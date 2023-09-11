import { container, DependencyContainer } from 'tsyringe';
import { Response, NextFunction } from "express";
import { ExtendedExpressRequest } from "./types";
import { userDtoFactory } from './factories/dtos/user-dto-factory';

const regiserRequestSpecificData = (child: DependencyContainer, id: number) => {
  child.register('UserDto', {
    useValue: userDtoFactory(id)
  });
}

export const registerContainer = (req: ExtendedExpressRequest, res: Response, next: NextFunction) => {
  const childContainer = container.createChildContainer();
  regiserRequestSpecificData(childContainer, req.headers['authorization'] as unknown as number);
  req.container = childContainer;
  next()
}
