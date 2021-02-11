import dynamic from "next/dynamic";
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
          <div
            style={{
              zIndex: 12,
              width: "100vw",
              display: "flex",
              justifyContent: "center",
            }}
          >
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
        <Duck />
      </ContainerTransition>
    </>
  );
};

export default ErrorPage;
