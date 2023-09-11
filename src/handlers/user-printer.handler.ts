import { Response, NextFunction } from "express";
import { ExtendedExpressRequest } from "../types";
import { UserDto } from "../user-dto";

export const userPrinter = (req: ExtendedExpressRequest, res: Response, next: NextFunction) => {
  const userDto = req.container.resolve<UserDto>('UserDto');
  console.log(userDto.id);
  
  next()
}
