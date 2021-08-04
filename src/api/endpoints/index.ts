import { AuthenticationEndpoints } from 'api/endpoints/authentication.endpoints';
import { PostsEndpoints } from './posts.endpoints';

export class Endpoints {
  static authentication = new AuthenticationEndpoints();
  static posts = new PostsEndpoints();
}
