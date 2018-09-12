import * as actionTypes from './actionTypes'

const defaultState = {
  data: null,
  error: null,
  isLoading: false
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
  case actionTypes.GET_START:
    return {
      ...state,
      isLoading: true
    }
  case actionTypes.GET_SUCCESS:
    return {
      ...state,
      isLoading: false,
      data: action.payload
    }
  case actionTypes.GET_FAILURE:
    return {
      ...state,
      isLoading: false,
      error: action.payload
    }
  case actionTypes.LOGOUT_SUCCESS:
    return defaultState;
  default:
    return state
  }
}

export default reducer;