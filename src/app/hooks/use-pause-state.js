import { useGlobalKeyBoard } from './use-global-keyboard'

const pauseState = {
  value: false
}

export const usePauseState = (callback = console.log) => {

  const pauseStateHandler = () => {
    pauseState.value = !pauseState.value
    setTimeout(() => {
      callback(pauseState)
    });
  }

  useGlobalKeyBoard('ctrl.alt.p', pauseStateHandler)

}
