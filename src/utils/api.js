import axios from "axios";

const baseUrl = "https://reqres.in/";

const GET = (path) => {
  return axios.get(baseUrl + path);
};

const POST = (path, data) => {
  return axios.post(baseUrl + path, data);
};

const PUT = (path, data) => {
  return axios.put(baseUrl + path, data);
};

const DELETE = (path) => {
  return axios.delete(baseUrl + path);
};

export const GetUsers = () => {
  return GET("api/users");
};

export const GetUserData = (id) => {
  return GET("api/users/" + id);
};

export const AddUser = (data) => {
  return POST("api/users", data);
};

export const UpdateUser = (id, data) => {
  return PUT("api/users/" + id, data);
};

export const DeleteUserById = (id) => {
  return DELETE("api/users/" + id);
};

export const UserLogin = (data) => {
  return POST("api/login", data);
};

export const UserRegister = (data) => {
  return POST("api/register", data);
};
