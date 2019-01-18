import {Record } from 'immutable';

class User extends Record({
  firstName: undefined,
  lastName: undefined
}) {

  fullName() {
    return this.firstName + ' ' + this.lastName 
  }
}

export default User