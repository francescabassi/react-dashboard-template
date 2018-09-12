import * as actionTypes from './actionTypes';
import AuthDAO from 'dao/AuthDAO';
import AuthService from 'services/AuthService'

import { push } from 'react-router-redux';

const loginStart = () => ({ type: actionTypes.LOGIN_START });
const loginSuccess = (payload) => ({ type: actionTypes.LOGIN_SUCCESS, payload });
const loginFailure = (payload) => ({ type: actionTypes.LOGIN_FAILURE, payload });

const logoutStart = () => ({ type: actionTypes.LOGOUT_START });
const logoutSuccess = () => ({ type: actionTypes.LOGOUT_SUCCESS });
const logoutFailure = (payload) => ({ type: actionTypes.LOGOUT_FAILURE, payload });


export const login = (email, password) => async dispatch => {
  dispatch(loginStart());
  try {
    const response = await new AuthDAO().login(email, password);
    dispatch(loginSuccess(response));
    dispatch(push('/'));
  }
  catch (err) {
    AuthService.clearToken()
    dispatch(loginFailure(err))
  }
};


export const logout = () => dispatch => {
  dispatch(logoutStart());
  try {
    AuthService.clearToken()
    dispatch(logoutSuccess());
    dispatch(push('/auth/login'));
  }
  catch (err) {
    dispatch(logoutFailure(err));
  }
};