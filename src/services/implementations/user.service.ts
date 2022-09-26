import { IUserService } from "../interfaces/iuser.service";
import { BaseService } from "./base.service";
import { IUserRepo, UserRepo, RepoResult } from '../../repository/db/index'
import { GenericResponse, IUser } from '../../faceModels/index'

export class UserService extends BaseService implements IUserService {

    userRepo: IUserRepo = new UserRepo();

    async getUsers() {
        let responseObject = new GenericResponse<IUser>();
        let repoResult = await this.userRepo.getUsers();
        if (repoResult.successful) {
            responseObject.data = repoResult.data;
            responseObject.successful = true;
        }
        else {
            responseObject.successful = false;
        }

        return responseObject;
    }
    async deleteUser(id: number) {
        let responseObject = new GenericResponse<IUser>();
        let repoResult = await this.userRepo.deleteUser(id);
        if (repoResult.successful) {
            responseObject.data = repoResult.data;
            responseObject.successful = true;
            responseObject.message = 'Successfully deleted User!'
        }
        else {
            responseObject.successful = false;
            responseObject.errors = repoResult.err;

        }

        return responseObject;

    }

    async addUser({ firstName, lastName }) {
        let responseObject = new GenericResponse<IUser>();
        const repoRes = (await this.userRepo.userExists({ firstName, lastName }));
        if (!repoRes.successful) {
            responseObject.successful = false;
            responseObject.errors = ['User Already Exists!'];
            return responseObject;
        } else {
            let repoRes: RepoResult<IUser> = await this.userRepo.addUser({
                firstName: firstName,
                lastName: lastName
            });
            responseObject.successful = repoRes.successful;
            responseObject.message = 'User Added successfully!';
            responseObject.data = repoRes.data;
            responseObject.errors = repoRes.errors;
            return responseObject;

            //todo ad user added to return 
        }
    }

    async updateUser({ id, firstName, lastName }) {


        const repoRes = await this.userRepo.getById(id);
        if (!repoRes.successful) {
            return new RepoResult(false, null, "User doesn't exist");
        } else {
            const u = repoRes.data;
            if (firstName)
                u.firstName = firstName;
            if (lastName)
                u.lastName = lastName;
            this.userRepo.updateUser(u);
            return new RepoResult(true, u, []);
        }


    };




}