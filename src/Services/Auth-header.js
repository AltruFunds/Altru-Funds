/**
 * The code below is a function that checks Local Storage for user credentials. 
 * If there is a logged in user with accessToken (JWT), it will return HTTP Authorization header. 
 * Otherwise, it will return an empty object.
 */

export default authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if ( user && user.accessToken) {
    return { Authorization : `Bearer ${user.accessToken}`}
  } else {
    return {}
  }
}