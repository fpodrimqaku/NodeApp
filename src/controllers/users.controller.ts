import { Request, Response, NextFunction } from 'express';
import { IUserService } from '../services/interfaces/iuser.service';
import { IUser, GenericResponse } from '../faceModels/index'
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

    if (!request.params.id)
      return response.status(500).send(
        ({
          successful: false,
          errors: ['Mising param Id!']

        } as any) as GenericResponse<IUser>)

    let res = await this._service
      .deleteUser(new Number(request.params.id));

    if(res.successful)  
    return response.status(200).send(res)
    else 
    return response.status(400).send(res)

  };
  public async addUser(request: Request, response: Response, next: NextFunction): Promise<any> {

    if (!request.body.firstName || !request.body.lastName)
    return response.status(500).send(
      ({
        successful: false,
        errors: ['Specify lastName and firstName in json body!']

      } as any) as GenericResponse<IUser>)


    let res = await this._service
      .addUser(request.body);

      if(res.successful)
    return response.status(200).send(res)
    else 
     return response.status(400).send(res)
  };
  public async updateUser(request: Request, response: Response, next: NextFunction): Promise<any> {

    if (!request.body.id)
    return response.status(500).send(
      ({
        successful: false,
        errors: ['Missing id of the user to update!']

      } as any) as GenericResponse<IUser>)


    let res = await this._service
      .updateUser(request.body);
      if(res.successful)
    return response.status(200).send(res)
    else
    return response.status(400).send(res)
  };






}