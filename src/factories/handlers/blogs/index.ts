import { DependencyContainer } from 'tsyringe'
import { GetAllBlogs } from "../../../handlers/blogs/get-all.handler"

export const GetAll = (container: DependencyContainer) => {
  return new GetAllBlogs(container);
}
