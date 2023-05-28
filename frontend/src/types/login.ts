export interface IUserLogin {
  login: string;
  password: string;
}

export interface IError {
  code: string;
  message: string;
}

export const typeGuardError = (error: unknown): error is IError => {
  return typeof error === 'object';
};
