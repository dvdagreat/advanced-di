import { Request } from "express";
import { DependencyContainer } from 'tsyringe';

export interface ExtendedExpressRequest extends Request {
  container: DependencyContainer;
  id: string;
}
