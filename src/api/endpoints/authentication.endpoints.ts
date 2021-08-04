import { AbstractEndpoints } from './abstract.endpoints';

export class AuthenticationEndpoints extends AbstractEndpoints {
  baseURL = 'authentication';
  version = 'v1';

  auth() {
    return `${this.getURL()}/auth`;
  }

  refresh() {
    return `${this.getURL()}/refresh`;
  }

  recoverPassword() {
    return `${this.getURL()}/recover-password`;
  }
}
