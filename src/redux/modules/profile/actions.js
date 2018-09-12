import * as actionTypes from './actionTypes';
import ProfileDAO from 'dao/ProfileDAO';

const getStart = () => ({ type: actionTypes.GET_START });
const getSuccess = (payload) => ({ type: actionTypes.GET_SUCCESS, payload });
const getFailure = (payload) => ({ type: actionTypes.GET_FAILURE, payload });


export const get = () => async dispatch => {
  dispatch(getStart());
  try {
    const response = await new ProfileDAO().get();
    dispatch(getSuccess(response));
  }
  catch (err) {
    dispatch(getFailure(err))
  }
};