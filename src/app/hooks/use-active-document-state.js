/**
 * retourné un etat boolen selon que le document est actif ou non 
 * API : 
 */


import { useGlobalEvent } from './use-global-event';
import { useState } from 'react';

export const useActiveDocumenState = () => {

  const [active, setActive] = useState(!document.hidden);

  useGlobalEvent('visibilitychange', () => {
    console.warn('visibilitychange');
    setActive(!document.hidden);
  });
  return active;

}


