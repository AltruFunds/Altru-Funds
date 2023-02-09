import axios from 'axios'

const baseApi_URL = 'https://altrufunds-production.up.railway.app/v1/';
const userRegisterCredentials = {} // this will be used as the registration data to avoid repitition, for now the raw object will be passed directly
const userLoginCredentials = {} // this will be used as the login data to avoid repitition, for now the raw object will be passed directly

/** function that handles registration
 * it directly returns an axios POST method that sends user data to the data base 
*/
const register = (firstName, lastName, email, phoneNumber, password) => {
  return axios.post(`${baseApi_URL}auth/register`, {firstName, lastName, email, phoneNumber, password} );
}

/**function that handles user Login 
 * using the same axios POST method sends a call to the database to check if user exists then returns a response that should contain the token
 * if the token is in the response ( indicating that the user exists ), then store that information to local storage
 * else handle the resultant error
*/
const login = (email, password) => {
  return axios.post(`${baseApi_URL}auth/login`, {email, password})
              .then((response) => {
                if (response.data.accessToken){ 
                  localStorage.setItem('user', JSON.stringify(response.data))
                }
              })
}