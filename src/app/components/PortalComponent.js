import ReactDOM from 'react-dom'
import { useSharedData } from "../hooks"

const PortalComponent = () => {

  const [data, updateData] = useSharedData();

  return ReactDOM.createPortal(
    <button onClick={() => updateData({ count: data.count + 1 })}>
      Increment
    </button>,
    document.getElementById('portal')
  )
}
export default PortalComponent; 
