
import apiClient from './apiClient';

export const loginApi = (params: {username: string, password: string}) =>
  apiClient
    .post('login', {
      username: params.username,
      password: params.password,
    })
    .then(function(response) {
      return response.data;
    })
    .catch(function(err) {
      console.error('Error login', err);
      throw err;
    });
const fakeCurrentUser = {
  role: 'User',
  firstName: 'Anonymous',
  email: 'anonymous@metanet.co.kr',
  phone: '0123456789',
};
export const signInApi = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(fakeCurrentUser);
  }, 300);
});