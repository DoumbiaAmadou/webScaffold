
import { useGlobalEvent } from '.';
import React, { useCallback } from 'react';
const getWindowSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight
})
export const useWindowSize = (subscription = true) => {
  const size = getWindowSize();
  const [stateSize, setStateSize] = React.useState(size)

  useGlobalEvent('resize', useCallback(() => {
    if (subscription)
      setStateSize(getWindowSize())
  }, [subscription]))

  return stateSize;
}
