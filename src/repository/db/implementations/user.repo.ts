import { IUserRepo } from "../interfaces/iuser.repo";
import {User} from '../../../data/db/models/user.models'
import { RepoResult } from "../repoResult";
import { IUser } from "../../../faceModels";
export class UserRepo implements IUserRepo {

    async getUsers() {

        let users= ((await User.findAll({raw:true})) as any) as IUser[];
        return new RepoResult(true,users);
    }
    async deleteUser(id: number) {

       
        let userToBeDeleted =( await this.getById(id));

        if(!userToBeDeleted.successful){
          return  new RepoResult<IUser>(false,null,'User Does Not Exists!');
        }


        await User.destroy({
            where: {
                id
            }
        });
        return new RepoResult(true,userToBeDeleted.data);
        //todo specify which user was deleted

    }
    async addUser({ firstName, lastName }) {

        const existingUser = await User.findAll({
            where: {
                firstName: firstName,
                lastName: lastName
            }
        });
        if (existingUser && existingUser.length > 0) {
            return new RepoResult(false,null,"User already exists");
        } else {
          let UserAdded  =   await User.create({
                firstName: firstName,
                lastName: lastName
            }) as IUser;
            return new RepoResult(true,UserAdded);


        }
    }

    async updateUser({ id, firstName, lastName }) {

        
        const existingUsers = await User.findAll({
            where: {
                id
            }
        });
        if (!existingUsers || existingUsers.length === 0) {
            return new RepoResult(false,null,"User doesn't exist");
        } else {
            const u = existingUsers[0];
            u.firstName = firstName;
            u.lastName = lastName;
            u.save();
            return new RepoResult(true,u,[]);
        }


    };


    
    async userExists({firstName,lastName}) {

        const existingUsers = await User.findAll({
            where: {
                firstName,
                lastName
            },
            raw:true
        });
        if (!existingUsers || existingUsers.length === 0) {
            return new RepoResult(true,null);
        } else {
          
            return new RepoResult(false,null);
        }
    };

    async getById(id:number){

        const existingUsers = await User.findAll({
            where: {
                id
            }
        });
        if (!existingUsers || existingUsers.length === 0) {
            return new RepoResult(false,null);
        } else {
          
            return new RepoResult(true,existingUsers[0]);
        }
    }



}