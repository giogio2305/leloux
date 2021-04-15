export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('reauth'));
  
    if (user && user.token) {
      // for Node.js Express back-end
      return { Authorization: 'fixas' + user.token };
    } else {
      return {};
    }
  }