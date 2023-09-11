import { scoped, Lifecycle } from 'tsyringe';

@scoped(Lifecycle.ResolutionScoped)
export class UserDto {
  private _id: number = 0;
  constructor(id: number) {
    this._id = id;
  }
  
  get id() {
    return this._id
  }
  
  set id(id: number) {
    this._id = id
  }
}
