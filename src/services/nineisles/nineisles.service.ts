import axios from "axios";

class NineIslesService {
    apiUrl: string = "https://www.unionlarp.co.uk/nineisles";

    constructor() { }

    getNineIslesData() {
        return axios.get(`${this.apiUrl}/getnineislesdata`);
    }
}

export const nineIslesService = new NineIslesService();
