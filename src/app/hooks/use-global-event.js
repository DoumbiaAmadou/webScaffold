/***
 * offrir  aux composant la possibilité de declencher : 
 * Passé en paramètre => Sur un event global
 */

import { useEffect } from 'react';


const listener = {};

export const useGlobalEvent = (eventName, callback) => {

  useEffect(
    () => {
      if (listener[eventName] === callback) return;

      window.addEventListener(eventName, callback)
      listener[eventName] = callback;

      return () => {
        delete listener[eventName]
        window.removeEventListener(eventName, callback)
      }
    })

}


