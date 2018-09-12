import DAO from './BaseDAO'

class ProfileDAO {
  constructor() {
    this.DAO = new DAO({ endpoint: 'profile' });
  }

  get() {
    return this.DAO.apiRequest({url: '', method: 'GET'})
  }
}

export default ProfileDAO;