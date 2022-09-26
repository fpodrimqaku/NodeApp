export class RepoResult<T>{

    constructor(successful, data, ...errors) {
        successful = successful;
        errors = errors;
        data = data;
    }

    successful: Boolean
    errors: []
    data: T
    //YOU CAN ADD OTHER VARS HERE SUCH AS STATUSES ETC
}