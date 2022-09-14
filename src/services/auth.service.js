import axios from "axios";
import React from "react";
import Login from "../routes/Auth/Login";
import Register from "../routes/Auth/Register";
const API_URL = "https://crop-profiles.herokuapp.com/api/v1/auth/";

class AuthService {
  login = (email, password) => {
    return axios
      .post(API_URL + "login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  };
  logout = () => {
    localStorage.removeItem("user");
  };
  register = (
    email,
    password,
    name
    // farmno,
    // farmnames,
    // locations,
    // animalfarm,
    // animalsize,
    // cropfarm,
    // cropsize,
    // otherfarm,
    // othersize,
    // boolean
  ) => {
    return axios.post(API_URL + "register", {
      email,
      password,
      name,
      // farmno,
      // farmnames,
      // locations,
      // animalfarm,
      // animalsize,
      // cropfarm,
      // cropsize,
      // otherfarm,
      // othersize,
      // boolean,
    });
  };
  getCurrentUser = () => {
    JSON.parse(localStorage.getItem("user"));
  };
}

export default new AuthService();
