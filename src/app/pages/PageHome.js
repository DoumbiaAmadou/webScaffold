import { LayoutDefault } from "../layouts"
import { FeatureClock } from '../features';

const PageHome = () => {
  return (
    <LayoutDefault>
      <LayoutDefault.Header>
        Header
      </LayoutDefault.Header>

      <LayoutDefault.Menu >
        MENU
      </LayoutDefault.Menu>

      <LayoutDefault.Main>
        <FeatureClock />
      </LayoutDefault.Main>

    </LayoutDefault>
  )
}

export default PageHome