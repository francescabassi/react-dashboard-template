class RestResource {
  constructor() {
    throw new Error('Cannot construct RestResource, because this is an absctract class.')
  }

  get(id) {
    return this.DAO.apiRequest({url: id, method: 'GET'})
  }
  remove(id) {
    return this.DAO.apiRequest({url: id, method: 'DELETE'})
  }
  update(data) {
    return this.DAO.apiRequest({url: data.id, method: 'PUT', data})
  }
  create(data) {
    return this.DAO.apiRequest({url: '', method: 'POST', data})
  }
  load(query) {
    return this.DAO.apiRequest({url: '', query, method: 'GET'})
  }
}

export default RestResource