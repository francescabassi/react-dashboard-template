import DAO from './BaseDAO'

class AuthDAO {
  constructor() {
    this.DAO = new DAO({ endpoint: 'profile' });
  }

  login(data) {
    return this.DAO.apiRequest({url: 'login', method: 'POST', data })
  }

  signup(data) {
    return this.DAO.apiRequest({url: 'signup', method: 'POST', data })
  }
}

export default AuthDAO;