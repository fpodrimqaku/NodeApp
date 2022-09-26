import { IUserRepo } from "../interfaces/iuser.repo";
import { User } from '../../../data/db/models/otherIndex'
import { RepoResult } from "../repoResult";
export class UserRepo implements IUserRepo {

    async getUsers() {

        let users= await ((await User.findAll()) as any);
        return new RepoResult(true,users);
    }
    async deleteUser(id: Number) {

        await User.destroy({
            where: {
                id
            }
        });
        return new RepoResult(true,null);
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
            await User.create({
                firstName: firstName,
                lastName: lastName
            });
            return new RepoResult(true,null);


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
            }
        });
        if (!existingUsers || existingUsers.length === 0) {
            return new RepoResult(true,null);
        } else {
          
            return new RepoResult(false,null);
        }


    };

    async getById(id:Number){

        const existingUsers = await User.findAll({
            where: {
                id
            }
        });
        if (!existingUsers || existingUsers.length === 0) {
            return new RepoResult(true,null);
        } else {
          
            return new RepoResult(false,null);
        }
    }



}