import express, { Request, Response, Router, NextFunction } from 'express';
import { UsersController } from '../controllers';
import { IUser } from '../faceModels';
import {IUserService,UserService} from '../services/index'

const router: Router = express.Router();
const userService: IUserService = new UserService();
const controller: UsersController = new UsersController(userService);

router.get('/', async (request: Request, response: Response, next: NextFunction) => {
  await controller.getAllUsers(request, response, next);
});

router.delete('/:id', async (request: Request, response: Response, next: NextFunction) => {
  await controller.deleteUser(request, response, next);
});

router.post('/', async (request: Request, response: Response, next: NextFunction) => {
  await controller.addUser(request, response, next);
});

router.put('/', async (request: Request, response: Response, next: NextFunction) => {
  await controller.updateUser(request, response, next);
});


export const usersRouter: Router = router;