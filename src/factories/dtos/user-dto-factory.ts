import { UserDto } from "../../dtos/user-dto";

export const userDtoFactory = (id: number) => {
  return new UserDto(id);
}
