import './App.css';
import React, { useEffect, useState } from 'react';
import { useActiveDocumenState, } from './hooks/use-active-document-state';
import { useGlobalKeyBoard } from './hooks/use-global-keyboard'
import usePauseState from 'hooks';
/* eslint-disable no-useless-constructor */

class AppComponent extends React.Component {

  state = {
    name: 'ATLAS'
  }
  val = 1;
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log('componentDidMount');
    window.addEventListener('keydown', this.updateTitle)
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    window.removeEventListener('keydown', this.updateTitle)
  }
  updateTitle = () => {
    this.setState({ name: this.state.name + '!' })
    this.val += 1;
  }
  render() {
    return this.state.name + this.val;
  }
}

function useNameHook(initial) {

  const [name, setName] = useState(initial)

  const updateName = () => {

    console.log('sdcdsc', name)
    //tres important sinon L'optimisation fait que 
    // react ne rerend pas le composant. 
    setName(prev => prev + '!');

  }

  useEffect(
    () => {
      window.addEventListener('keydown', updateName)
      return () => {
        window.removeEventListener('keydown', updateName)
      }
    }, [])
  return name;
}

export { AppComponent }

export default function App() {
  const name = useNameHook('Atlas')
  const active = useActiveDocumenState();
  useGlobalKeyBoard('ctrl.o');

  return (
    <div>{name}, document est {active}</div>
  )
}

export const useLogPauseInfo = () => {
  usePauseState((pause) => {
    const log = "Pause is" + (pause ? 'active' : "deactivated");
    console.warn(log);
    alert(log);
  })
}