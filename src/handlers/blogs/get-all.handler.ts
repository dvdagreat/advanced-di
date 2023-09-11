import { injectable, DependencyContainer } from 'tsyringe';
import { UserDto } from '../../dtos/user-dto';

@injectable()
export class GetAllBlogs {
  constructor(private container: DependencyContainer) {}
  public handle = async () => {
    const userDto = this.container.resolve<UserDto>('UserDto');
    console.log(userDto.id);
    return {
      id: userDto.id
    }
  }
}
