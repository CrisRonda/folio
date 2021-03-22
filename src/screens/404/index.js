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
import SEO from "../../components/SEO";
import useSEO from "../../hooks/useSEO";

const Duck = dynamic(() => import("../../Models/Duck"), {
  ssr: false,
});

const ErrorPage = () => {
  const { formatMessage: f } = useIntl();
  const { seoData } = useSEO({
    seo_key_description: "seo_description_404",
    seo_key_title: "seo_title_404",
    route: "/404",
  });
  return (
    <>
      <SEO {...seoData} />
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
