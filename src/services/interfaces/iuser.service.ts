import { IBaseService } from "./ibase.service";

export interface IUserService extends IBaseService {

    getUsers();
  deleteUser();
  addUser();
  updateUser();
      
   

}