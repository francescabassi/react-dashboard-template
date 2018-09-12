import { logout } from 'redux//modules/auth/actions'

export default store => next => action => {
  if (action.payload === 'NetworkError' || action.payload === 'Unauthorized') {
    store.dispatch(logout())
  } else {
    return next(action);
  }
}