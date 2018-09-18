import { NOTIFY_USER } from '../actions/types';

const initialState = {
  messageSuccess: null,
  messageError: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NOTIFY_USER:
      return {
        ...state,
        messageSuccess: action.messageSuccess,
        messageError: action.messageError
      };
    default:
      return state;
  }
}
