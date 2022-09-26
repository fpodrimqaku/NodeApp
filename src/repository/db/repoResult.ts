export class RepoResult<T>{

    constructor(successful, data, ...errors) {
        this.successful = successful;
        this.errors = errors;
        this.data = data;
    }

    successful: Boolean
    errors: String[]
    data: T
    //YOU CAN ADD OTHER VARS HERE SUCH AS STATUSES ETC
}