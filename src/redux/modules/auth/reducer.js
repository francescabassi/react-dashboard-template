import * as actionTypes from './actionTypes'

const defaultState = {
  isLoading: false,
  errors: null
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
  case actionTypes.LOGIN_START:
    return {
      ...state,
      isLoading: true
    }
  case actionTypes.LOGIN_SUCCESS:
    AuthService.saveToken(action.payload)
    return {
      ...state,
      isLoading: false
    }
  case actionTypes.LOGOUT_SUCCESS:
  case actionTypes.LOGIN_FAILURE:
    return {
      ...state,
      isLoading: false,
      errors: action.payload
    }
  case actionTypes.LOGOUT_SUCCESS:
    return defaultState
  default:
    return state
  }
}

export default reducer;