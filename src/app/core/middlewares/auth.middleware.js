import { ActionTypes } from "../store";
import { login } from "../services/auth"
export const authMiddleware = (store) => (next) => async (action) => {
  console.warn(action);

  if (action.type === ActionTypes.USER_CONNECTION) {
    const credentials = { email: action.data.Email, password: action.data.name }
    const result = await login(credentials);

    store.dispatch({ type: ActionTypes.NOTIFICATION_UPDATE, data: result })
  }
  next({ action });
}