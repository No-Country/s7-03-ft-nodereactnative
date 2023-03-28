declare namespace Express {
  export interface Request {
    user: import('../user.type').UserSession;
  }
}
