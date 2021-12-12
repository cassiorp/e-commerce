import axios from 'axios';
import qs from 'qs';
export function sendService(request) {
  console.log(request.user.name, 'aaaaaaaaaaaaaaaaaaaaaa', request);
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
