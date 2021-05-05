import styled from "styled-components";
import {
  ContainerTransition,
  Flex,
  Typography,
  ScaleBox,
} from "../../components";
import { useIntl } from "react-intl";
import Lottie from "react-lottie";
import SEO from "../../components/SEO";
import useSEO from "../../hooks/useSEO";
import dataCLick from "../../lottie/click.json";
import dataSocial from "../../lottie/social.json";
import useMediaQuery from "../../hooks/useMediaQuery";

const network = [
  {
    link: "https://www.linkedin.com/in/cristian-ronda-169414180/",
    label: "Linkedin",
    img:
      "https://res.cloudinary.com/dzh1db41l/image/upload/v1612659264/social/linkedin-icon-2_dzr4ub.svg",
  },
  {
    link: "https://github.com/CristianRonda",
    label: "GitHub",
    img: "/images/techs/5.svg",
  },
  {
    link: "https://cristian-ronda.medium.com/",
    label: "Medium",
    img:
      "https://res.cloudinary.com/dzh1db41l/image/upload/v1612659184/social/monogram-medium_sftqo2.svg",
  },
  {
    link: "https://www.facebook.com/cristian.ronda2",
    label: "Facebook",
    img:
      "https://res.cloudinary.com/dzh1db41l/image/upload/v1612659127/social/facebook-3_bozll1.svg",
  },
  {
    link: "https://www.instagram.com/cristian.ronda1/",
    label: "Instagram",
    img:
      "https://res.cloudinary.com/dzh1db41l/image/upload/v1612659206/social/instagram-2-1_ky16gy.svg",
  },
];

const animationClick = {
  loop: true,
  autoplay: true,
  animationData: dataCLick,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const animationSocial = {
  loop: false,
  autoplay: true,
  animationData: dataSocial,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Contact = () => {
  const { formatMessage: f } = useIntl();
  const calls = [
    {
      link: "https://wa.link/r3dhna",
      label: "WhatsApp",
      img:
        "https://res.cloudinary.com/dzh1db41l/image/upload/v1612659251/social/whatsapp-symbol_h2ihca.svg",
    },
    {
      link: "tel:+593987868889",
      label: f({ id: "call" }),
      img:
        "https://res.cloudinary.com/dzh1db41l/image/upload/v1612659322/social/viber_vvspf5.svg",
      notOpen: true,
    },
    {
      link:
        "mailto:cristian.ronda.dev@gmail.com?Subject=Contacto%20desde%20la%20web",
      label: "Email",
      img:
        "https://res.cloudinary.com/dzh1db41l/image/upload/v1612659219/social/gmail-icon_irn1fm.svg",
      notOpen: true,
    },
  ];
  const { isSM } = useMediaQuery();
  const { seoData } = useSEO({
    seo_key_description: "seo_description_contact",
    seo_key_title: "seo_title_contact",
    route: "/contact",
  });

  return (
    <>
      <SEO {...seoData} />

      <ContainerTransition initialColor="black" endColor="white">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
            width: "100%",
            overflow: "scroll",
            flexDirection: "column",
          }}
        >
          <Flex
            flexDirection="column"
            pt={8}
            flex={1}
            justifyContent="center"
            alignItems="center"
          >
            <div style={{ position: "relative" }}>
              <a
                style={{
                  color: "#839e2e",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                href={process.env.NEXT_PUBLIC_APK_FOLIO}
                target="_blank"
              >
                <Typography
                  my={[3, 4, 6]}
                  lineHeight={[1, 2, 4]}
                  fontSize={[3, 4, 6]}
                >
                  {f({ id: "download_app" })}
                </Typography>
                <Lottie
                  options={animationClick}
                  height={isSM ? 64 : 130}
                  width={isSM ? 64 : 130}
                  speed={0.3}
                />
                <Typography
                  my={[3, 4, 6]}
                  lineHeight={[1, 2, 4]}
                  fontSize={[3, 4, 6]}
                >
                  app
                </Typography>
              </a>
            </div>
            <Typography lineHeight={[1, 2, 4]} fontSize={[3, 4, 7]}>
              {f({ id: "contact.title" })}
            </Typography>

            <Flex
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              my={[3, 4, 6]}
              flexWrap="wrap"
            >
              {network.map(({ img, label, link }, index) => (
                <ScaleBox key={index} duration={1} delayOrder={0.1 * index}>
                  <ContainerIcon href={link} target="_blank" rel="noreferrer">
                    <Icon src={img} alt={label} />
                    <Typography color="text" fontSize={2}>
                      {label}
                    </Typography>
                  </ContainerIcon>
                </ScaleBox>
              ))}
            </Flex>
            <Typography lineHeight={[1, 2, 4]} fontSize={[3, 4, 7]}>
              {f({ id: "contact.subtitle" })}
            </Typography>
            <Flex
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
              my={[3, 4, 6]}
            >
              {calls.map(({ img, label, link, notOpen }, index) => (
                <ScaleBox key={index} duration={1} delayOrder={0.1 * index}>
                  <ContainerIcon
                    href={link}
                    target={notOpen ? "" : "_blank"}
                    rel="noreferrer"
                  >
                    <Icon src={img} alt={label} />
                    <Typography color="text" fontSize={2}>
                      {label}
                    </Typography>
                  </ContainerIcon>
                </ScaleBox>
              ))}
            </Flex>
          </Flex>
          {!isSM && (
            <Lottie
              style={{
                position: "absolute",
                bottom: 64,
                left: 64,
              }}
              options={animationSocial}
              height={isSM ? 80 : 180}
              width={isSM ? 80 : 180}
              speed={0.5}
            />
          )}
        </div>
      </ContainerTransition>
    </>
  );
};

const ContainerIcon = styled.a`
  margin: 16px;
  opacity: 0.2;
  transition: opacity 0.7s ease;
  :hover {
    opacity: 1;
  }
`;

const Icon = styled.img`
  height: 64px;
  width: auto;
`;

export default Contact;
