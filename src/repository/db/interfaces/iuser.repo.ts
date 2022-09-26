import { IUser } from "../../../faceModels";
import { IBaseRepo } from "./ibase.repo";

export interface IUserRepo extends IBaseRepo<IUser>{
  getUsers();
  deleteUser(id:Number) ;
  addUser({firstName,lastName});
  updateUser({id,firstName,lastName});
   userExists({firstName,lastName});
   getById(id:Number);
}