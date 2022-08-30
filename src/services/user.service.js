import axios from "axios";
import React from "react";
import Login from "../routes/Auth/Login";
import Register from "../routes/Auth/Register";
const API_URL = "http://localhost:8080/api/auth/";

const AuthService = () => {
  const login = (email, password) => {
    return axios
      .post(API_URL + "signin", {
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
  const logout = () => {
    localStorage.removeItem("user");
  };
  const register = (
    email,
    password,
    name,
    farmno,
    farmnames,
    locations,
    animalfarm,
    animalsize,
    cropfarm,
    cropsize,
    otherfarm,
    othersize,
    boolean
  ) => {
    return axios.post(API_URL + "signup", {
      email,
      password,
      name,
      farmno,
      farmnames,
      locations,
      animalfarm,
      animalsize,
      cropfarm,
      cropsize,
      otherfarm,
      othersize,
      boolean,
    });
  };
  const getCurrentUser = () => {
    JSON.parse(localStorage.getItem("user"));
  };
};

export default AuthService();
