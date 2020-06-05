import axios from "axios";

class TorchbearerService {
  apiUrl: string = "https://www.unionlarp.co.uk/torchbearer";

  constructor() {}

  getSkillsData() {
    return axios.get(`${this.apiUrl}/gettorchbearerskills`);
  }
}

export const torchbearerService = new TorchbearerService();
