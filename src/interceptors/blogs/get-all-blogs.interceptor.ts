import {injectable} from 'tsyringe';
import { ExtendedExpressRequest } from '../../types';
import { NextFunction, Response } from 'express';
import { UserDto } from '../../dtos/user-dto';
import { Factories } from '../../factories';

@injectable()
export class GetAllBlogs {
  public intercept = async (req: ExtendedExpressRequest, res: Response, next: NextFunction) => {
    const handler = Factories.Handlers.blogs.GetAll(req.container);
    const result = await handler.handle();
    res.json(result);
  }
}
