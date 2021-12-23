import axios from 'axios';
import { getFromLocalStorage } from '../utils/localstorage';
import { getAllPurchaseByUserIdSaga } from '../sagas/userSaga';

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

export function updateUser(request) {
  const userId = request.user.id;

  const ENDPOINT = `http://localhost:8080/v1/users/${userId}`;

  const userUpdate = {
    name: request.user?.name,
    email: request.user?.email,
    password: request.user?.password,
  };

  return new Promise((resolve, reject) => {
    try {
      const result = axios.put(ENDPOINT, userUpdate, headerAuthorization);
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

export function getAllPurchaseByUserIdService(request) {
  const LOGIN_API_ENDPOINT = `http://localhost:8080/v1/products/user/purchase/${request}`;
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
  const product = {
    name: request.product?.name,
    idUser: request.product?.idUser,
    description: request.product?.description,
    price: request.product?.price,
    urlImage: request.product?.urlImage,
  };

  const LOGIN_API_ENDPOINT = `http://localhost:8080/v1/products/user`;

  return new Promise((resolve, reject) => {
    try {
      const result = axios.post(
        LOGIN_API_ENDPOINT,
        product,
        headerAuthorization,
      );
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

export function updateProduct(request) {
  const productId = request.product.productId;

  const ENDPOINT = `http://localhost:8080/v1/products/user/${productId}`;

  const product = {
    name: request.product?.name,
    idUser: request.product?.idUser,
    description: request.product?.description,
    price: request.product?.price,
    urlImage: request.product?.urlImage,
  };

  return new Promise((resolve, reject) => {
    try {
      const result = axios.put(ENDPOINT, product, headerAuthorization);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

export function buyProduct(request) {
  const LOGIN_API_ENDPOINT = `http://localhost:8080/v1/products/user/purchase`;
  const purchase = {
    productId: request.purchase?.productId,
    userId: request?.purchase?.userId,
  };
  return new Promise((resolve, reject) => {
    try {
      const result = axios.post(
        LOGIN_API_ENDPOINT,
        purchase,
        headerAuthorization,
      );
      resolve(result);
    } catch (error) {
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
