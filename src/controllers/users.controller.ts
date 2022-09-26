import { Request, Response, NextFunction } from 'express';

export class UsersController {
 

  public async getAllUsers(request: Request, response: Response, next: NextFunction): Promise<any> {
   // return this._repository
   //   .findAll()
   //   .then((users) => response.status(200).send(users))
   //   .catch((error) => response.status(500).send({ error: error }));
  }
}
