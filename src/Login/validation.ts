import { users } from '../models/user.model';

export const validateUser = (username: string, password: string) => {
  return users.find(user => user.username === username && user.password === password);
};
