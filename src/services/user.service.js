import axios from "axios";
const API_URL = "http://localhost:8080/api/test/";

class UserService {
  getPublicContent = () => {
    return axios.get(API_URL + "all");
  };
}

export default new UserService();
