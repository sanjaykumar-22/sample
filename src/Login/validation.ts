import { users } from '../models/user.model';

export const validateUser = (userid: string, password: string, phoneNumber: string) => {
  return users.find(user => user.userid === userid || user.phoneNumber === phoneNumber && user.password === password);
};
