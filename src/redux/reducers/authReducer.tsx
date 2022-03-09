import { Iaction, Iauth } from '../../components/interfaces';
import { GLOBALTYPES } from '../actions/globalTypes';

const initialState: Iauth = {};

const authReducers = (state: Iauth = initialState, action: Iaction<Iauth>) => {
  switch (action.type) {
    case GLOBALTYPES.AUTH:
      return { ...action.payload };
    default:
      return state;
  }
};

export default authReducers;
