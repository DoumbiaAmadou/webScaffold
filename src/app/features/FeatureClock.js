import React from 'react'
import { timeApi } from '../lib';

const useTime = () => {
  const [date, setDate] = React.useState(timeApi.now().toString())

  React.useEffect(
    () => {
      const timer = setInterval(() => setDate(timeApi.now().toString()), 1000)
      return () => clearInterval(timer);
    }
    , []);
  return date;
}

const FeactureClock = () => {
  const time = useTime();

  return (
    <>
      {time}
    </>
  )
}

export default FeactureClock;