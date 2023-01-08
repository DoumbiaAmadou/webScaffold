// use-shared-data.js
import { useState, useEffect } from "react";

let data = { count: 1 }
let renderers = [];

export const useSharedData = () => {

  const [value, triggerComponentRender] = useState(data);

  useEffect(
    () => {
      renderers.push(triggerComponentRender)
      return () => {
        console.log('Deleting unused renderer')
        renderers = renderers.filter(render => render !== triggerComponentRender)
      }
    }
    , [])

  const updateValue = (update) => {
    data = { ...data, ...update }
    renderers.forEach(render => render(data));
  }

  return [value, updateValue];
}