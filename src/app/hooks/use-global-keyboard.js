import { useGlobalEvent } from './use-global-event';

/**
 * permettre le declanchement d'un callback sur une sequence de caractère saisie 
 * avec filtrage tel que: 
 * 'u' écoute le caratère "u"
 * "ctrl, alt, space" écoute les caractères "u" avec la touche controle et la touche alt activée. 
 */


export const useGlobalKeyBoard = (keyString, callback = console.log, preventDefault = false) => {

  useGlobalEvent("keydown", (event) => {

    preventDefault && event.preventDefault()
    const keys = keyString.split(".")
    const key = keys[keys.length - 1]

    console.log(key)

    const hasRightKey = event.key === key
      || event.which === key
      || String(event.keyCode).toLowerCase() === key

    const hasCtrl = keys.includes("ctrl")
    const hasAlt = keys.includes("alt")

    if (hasAlt === event.altKey && hasCtrl === event.ctrlKey && hasRightKey) {
      console.log("Handle Key! ", key,
        hasCtrl ? 'with' : 'without', 'crtl active',
        hasAlt ? 'with' : 'without', 'alt active')
      callback();
    }
  });
}
