import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "drei";
import {
  ContainerTransition,
  FadeInUpBox,
  Flex,
  Link,
  StaggerWrap,
  Typography,
} from "../../components";
import { useIntl } from "react-intl";
import SEO from "../../components/molecules/SEO";

const Duck = dynamic(() => import("../../Models/Duck"), {
  ssr: false,
});

const ErrorPage = () => {
  const { formatMessage: f } = useIntl();
  return (
    <>
      <SEO title="404 | No encontramos lo que buscabas" />
      <ContainerTransition>
        <Flex
          flexDirection="column"
          height={"250px"}
          justifyContent="center"
          alignItems="center"
        >
          <div style={{ zIndex: 12 }}>
            <StaggerWrap childrenDelay={6} ease="ease">
              <FadeInUpBox yOffset={64} duration={2}>
                <Typography fontSize={6} color="white">
                  {f({ id: "404_1" })}
                </Typography>
                <Typography fontSize={3} color="white">
                  {f({ id: "404_2" })}
                </Typography>
                <Link>
                  <Typography fontSize={2} color="white">
                    {f({ id: "404_3" })}
                  </Typography>
                </Link>
              </FadeInUpBox>
            </StaggerWrap>
          </div>
        </Flex>

        <div style={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
          <Canvas camera={{ position: [0, 1, 3] }}>
            <ambientLight intensity={1} />
            <pointLight position={[40, 40, 40]} />
            <OrbitControls />
            <Suspense fallback={null}>
              <Duck />
            </Suspense>
          </Canvas>
        </div>
      </ContainerTransition>
    </>
  );
};

export default ErrorPage;
