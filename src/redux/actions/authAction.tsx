import axios from 'axios';
import { GLOBALTYPES } from './globalTypes';
import { Dispatch } from 'redux';
import { ILogin } from '../../components/interfaces';

export const login = (data: ILogin) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
    axios
      .post('https://job-sv.herokuapp.com/api/login', data)
      .then((res) => {
        dispatch({
          type: GLOBALTYPES.AUTH,
          payload: { user: res.data.user, access_token: res.data.access_token },
        });
        localStorage.setItem('access_token', res.data.access_token);
        dispatch({
          type: GLOBALTYPES.ALERT,
          payload: { success: res.data.msg },
        });
      })
      .catch((err) => {
        dispatch({
          type: GLOBALTYPES.ALERT,
          payload: { error: err.response.data.msg },
        });
      });
  } catch (err) {
    console.log(err);
  }
};

export const Logout = () => async (dispatch: Dispatch) => {
  dispatch({ type: GLOBALTYPES.AUTH, payload: {} });
  localStorage.removeItem('access_token');
};
