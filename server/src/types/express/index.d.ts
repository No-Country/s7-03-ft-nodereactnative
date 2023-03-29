declare namespace Express {
  export interface Request {
    user: import('../users/user.type').UserSession;
  }
}
