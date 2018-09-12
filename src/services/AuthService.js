const LS_TOKEN_KEY = 'idToken';

class AuthService {
  isLoggedIn = () => Boolean(this.getToken());

  getToken = () => localStorage.getItem(LS_TOKEN_KEY);

  saveToken = (token) => localStorage.setItem(LS_TOKEN_KEY, token);

  clearToken = () => localStorage.removeItem(LS_TOKEN_KEY);
}

export default new AuthService();