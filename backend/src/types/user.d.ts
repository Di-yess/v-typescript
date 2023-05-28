import { Request } from '@nestjs/common';

export interface IUser {
  id: number;
  login: string;
  password: string;
  createAt?: Date;
}

export interface IUserRequest extends Request {
  user: {
    id: number;
    login: string;
    iat: number;
    exp: number;
  };
}
