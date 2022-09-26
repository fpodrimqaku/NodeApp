import { Request, Response, NextFunction } from 'express';
import { IUserService } from '../services/interfaces/iuser.service';
export class UsersController {
 
    private readonly _service: IUserService;
  
    constructor(service: IUserService) {
      this._service = service;
    }
  
    public async getAllUsers(request: Request, response: Response, next: NextFunction): Promise<any> {
      let res = await this._service
        .getUsers();
      return response.status(200).send(res)
    }


    public async deleteUser(request: Request, response: Response, next: NextFunction): Promise<any> {
      let res = await this._service
      .deleteUser(new Number (request.params.id));
      return response.status(200).send(res)

    };
    public async addUser(request: Request, response: Response, next: NextFunction): Promise<any> {

      let res = await this._service
      .addUser(request.body);
      return response.status(200).send(res)
    };
    public async updateUser(request: Request, response: Response, next: NextFunction): Promise<any> {
      let res = await this._service
      .updateUser(request.body);
      return response.status(200).send(res)
    };






  }