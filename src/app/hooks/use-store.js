import { ActionTypes, store } from "../core/store";
import React, { useEffect } from 'react';

export const useStore = (subscription = true) => {
  const [state, triggerRender] = React.useState(store.getState())
  useEffect(
    () => subscription && store.subscribe(() => triggerRender(store.getState()))
    ,
    [subscription]
  )
  return [state, store.dispatch, ActionTypes];
}