import { FeatureLogin } from "../../features";
import { useWindowSize } from "../../hooks";
import { LayoutDefault } from "../../layouts"

const PageLogin = () => {
  const size = useWindowSize(true);

  console.log('=+>', { size })
  return (
    <LayoutDefault>
      <LayoutDefault.Header>
        {[JSON.stringify(size)]}
        <h2>
          PageLogin

        </h2>

      </LayoutDefault.Header>

      <LayoutDefault.Menu >
        <h2>PageLogin MENU</h2>
      </LayoutDefault.Menu>

      <LayoutDefault.Main>
        <FeatureLogin />
      </LayoutDefault.Main>

    </LayoutDefault>
  )
}

export default PageLogin