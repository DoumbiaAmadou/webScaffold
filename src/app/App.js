import { useLogPauseInfo } from "./hooks";
import { PageLogin } from "./pages"
//import { useGlobalEvent } from './hooks/use-global-event';

const App = () => {
  useLogPauseInfo();

  // useGlobalEvent('click', () => import('./data.js').then(val => console.log(val)))
  return (
    <>
      <PageLogin />
    </>
  )
}
export default App;
