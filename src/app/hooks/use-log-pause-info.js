import { usePauseState } from ".";

export const useLogPauseInfo = () => {
  usePauseState((pause) => {
    const log = "Pause is" + (pause ? 'active' : "deactivated");
    console.warn(log);
    alert(log);
  })
}