import React from 'react'
import ReactDOM from 'react-dom'
import { BaseContainer, BaseFooter, BaseHeader } from './../components'
import { useThemeContext } from '../contexts'
import { store } from '../core/store'
// import { useWindowSize } from './../hooks';

const Meta = (props) => ReactDOM.createPortal(
  <meta {...props} />,
  document.querySelector('head')
)
const Title = ({ children }) => ReactDOM.createPortal(
  <title>
    {children}
  </title>,
  document.querySelector('head')
)
const LayoutDefault = ({ children }) => {

  const theme = useThemeContext();
  console.log(theme);
  // const screenSize = useWindowSize();
  const headerContent = children.filter(child => {
    return child.type === LayoutDefault.Header
  })
    .map(comp => comp.props.children);
  const menuContent = children.filter(child => child.type === LayoutDefault.Menu)
    .map(comp => comp.props.children);
  const mainContent = children.filter(child => child.type === LayoutDefault.Main)
    .map(comp => comp.props.children);


  return (
    <>
      <Meta name='description' content='hello word' />
      <Title>App </Title>
      <BaseHeader>
        <h1>Atlas </h1>
        {headerContent}
      </BaseHeader>
      current Theme: {theme.currenTheme}
      <BaseContainer>
        {menuContent}
      </BaseContainer>

      <BaseContainer>
        {mainContent}
      </BaseContainer>
      <BaseFooter />
    </>
  )
}


LayoutDefault.Header = () => 'Header';
LayoutDefault.Menu = () => 'Menu';
LayoutDefault.Main = () => 'Main';


export default LayoutDefault