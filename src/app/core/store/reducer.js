
import { ActionTypes } from './actions';
export const rootReducer = (state, action) => {
  console.log(action)
  switch (action.type) {

    case ActionTypes.USER_CONNECTION_REQUEST:
      return { ...state, notiifications: [state.notiifications, ActionTypes.USER_CONNECTION_REQUEST] }
      break
    default:
      return state;
  }
}