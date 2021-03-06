const API_URL = "http://localhost:3000/emploi";

export class EmployeService {

    constructor($http, toastr) {
        'ngInject';
        this.$http = $http;
        this.toastr = toastr;
    }

    getEmployes() {
        return this.$http({
            method: 'GET',
            url: API_URL
        })
            .then((response) => {
                return response.data;
            })
            .catch(this.handleError);
    }

    handleError(pError) {
        console.error(pError);
    }
}