import axios from 'axios';
import { getFromLocalStorage } from '../utils/localstorage';

const headerAuthorization = {
  headers: { Authorization: `Bearer ${getFromLocalStorage('token')}` },
};

export function sendService(request) {
  const LOGIN_API_ENDPOINT = `http://localhost:8080/v1/users`;
  const body = {
    name: request.user.name,
    email: request.user.email,
    password: request.user.password,
  };
  return new Promise((resolve, reject) => {
    try {
      const result = axios.post(LOGIN_API_ENDPOINT, body);

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

export function loginService(request) {
  const LOGIN_API_ENDPOINT = `http://localhost:8080/v1/login`;
  const body = {
    user: request.user.email,
    password: request.user.password,
  };
  return new Promise((resolve, reject) => {
    try {
      const result = axios.post(LOGIN_API_ENDPOINT, body);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

export function getUserInfo(request) {
  const LOGIN_API_ENDPOINT = `http://localhost:8080/v1/users/email/${request}`;
  return new Promise((resolve, reject) => {
    try {
      const result = axios.get(LOGIN_API_ENDPOINT, headerAuthorization);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

export function getAllProductsFromUserService(request) {
  const LOGIN_API_ENDPOINT = `http://localhost:8080/v1/products/user/${request}`;
  return new Promise((resolve, reject) => {
    try {
      const result = axios.get(LOGIN_API_ENDPOINT, headerAuthorization);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

export function createProduct(request) {
  console.log("BODY REQUEST");
  console.log(request.product);
  const LOGIN_API_ENDPOINT = `http://localhost:8080/v1/products/user`;
  
  return new Promise((resolve, reject) => {
    try {
      console.log(request)
      const result = axios.post(LOGIN_API_ENDPOINT, request.product, headerAuthorization);
      console.log("resultado")
      console.log(result);
      resolve(result);
    } catch (error) {
      console.log("ERRO PROSMISSE");
      console.log(error); 
      reject(error);
    }
  });
}

export function getAllProducts() {
  const LOGIN_API_ENDPOINT = `http://localhost:8080/v1/products/user/`;
  return new Promise((resolve, reject) => {
    try {
      const result = axios.get(LOGIN_API_ENDPOINT, headerAuthorization);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}
