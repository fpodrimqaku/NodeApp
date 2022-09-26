import { IBaseService } from "./ibase.service";

export interface IUserService extends IBaseService {

    getUsers();
    deleteUser(id: Number);
    addUser({ firstName, lastName });
    updateUser({ id, firstName, lastName });



}