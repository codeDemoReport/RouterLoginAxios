import { GLOBALTYPES } from '../actions/globalTypes';
import { Ialert } from '../../components/interfaces';

const initialState = {};

const alertReducer = (state = initialState, action: Ialert) => {
  switch (action.type) {
    case GLOBALTYPES.ALERT:
      return action.payload;
    default:
      return state;
  }
};

export default alertReducer;
