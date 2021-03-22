import { useIntl } from "react-intl";

const useContent = () => {
  const { formatMessage: f } = useIntl();
  const content = [
    // folio
    {
      id: 0,
      title: f({ id: "folio0.title" }),
      solution: f({ id: "folio0.solution" }),
      problem: f({ id: "folio0.problem" }),
      photo:
        "https://res.cloudinary.com/dzh1db41l/image/upload/v1612644655/Folio/ezgif.com-gif-maker_krq5mi.gif",
      info: {
        link: "https://github.com/CrisRonda/folio",
        label: f({ id: "seeGithub" }),
        icon:
          "https://res.cloudinary.com/dzh1db41l/image/upload/v1612649890/github-icon-white-6_m9z7xs.png",
      },
      techs: [
        {
          alt: "NextJS",
          img:
            "https://res.cloudinary.com/dzh1db41l/image/upload/v1612651206/nextjs_d5xrj4.png",
        },
        {
          alt: "ThreeJS",
          img:
            "https://res.cloudinary.com/dzh1db41l/image/upload/v1612647900/threejs_yklgdn.png",
        },
        { alt: "Storybook", img: "/images/techs/8.svg" },
        {
          alt: "Framer Motion",
          img:
            "https://res.cloudinary.com/dzh1db41l/image/upload/v1612647958/framer-motion_uphngb.png",
        },
      ],
    },
    {
      id: 1,
      title: f({ id: "folio4.title" }),
      solution: f({ id: "folio4.solution" }),
      problem: f({ id: "folio4.problem" }),
      photo:
        "https://camo.githubusercontent.com/3af5f0c485433428b2dc1af7b90b36ff57aba78ded414e6e1e0e966ee5faabb6/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f59726f706c4a5059534652644175673159432f67697068792e676966",
      info: {
        link: "https://github.com/CrisRonda/dbz-angular",
        label: f({ id: "seeGithub" }),
        icon:
          "https://res.cloudinary.com/dzh1db41l/image/upload/v1612649890/github-icon-white-6_m9z7xs.png",
      },
      techs: [
        {
          alt: "Angular",
          img:
            "https://res.cloudinary.com/dzh1db41l/image/upload/v1616452509/angular-icon-1_i6pjr5.svg",
        },
        {
          alt: "NodeJS",
          img:
            "https://res.cloudinary.com/dzh1db41l/image/upload/v1616452710/nodejs-icon_yzshyk.svg",
        },
        {
          alt: "Apollo GraphQL",
          img:
            "https://res.cloudinary.com/dzh1db41l/image/upload/v1616452750/graphql-logo-2_sar57x.svg",
        },
        {
          alt: "JWT",
          img:
            "https://res.cloudinary.com/dzh1db41l/image/upload/v1616452790/jwt-3_ecnief.svg",
        },
      ],
    },
    // fashion
    {
      id: 2,
      title: f({ id: "folio1.title" }),
      solution: f({ id: "folio1.solution" }),
      problem: f({ id: "folio1.problem" }),
      photo: "https://media.giphy.com/media/EVaI3alGhWGXLQuISP/giphy.gif",
      info: {
        link: "https://github.com/CrisRonda/Fashion_Expo",
        label: f({ id: "seeGithub" }),
        icon:
          "https://res.cloudinary.com/dzh1db41l/image/upload/v1612649890/github-icon-white-6_m9z7xs.png",
      },
      techs: [
        { alt: "React Native", img: "/images/techs/12.svg" },
        {
          alt: "Expo",
          img:
            "https://res.cloudinary.com/dzh1db41l/image/upload/v1612648019/1_EKXYhntirnqHjXdTGmLXyw_d7zsgl.png",
        },
      ],
    },
    // flutter
    {
      id: 3,
      title: f({ id: "folio2.title" }),
      solution: f({ id: "folio2.solution" }),
      problem: f({ id: "folio2.problem" }),
      photo:
        "https://user-images.githubusercontent.com/42586480/64081889-c6126600-cccc-11e9-95bc-718662b75cc2.gif",
      info: {
        link: "https://github.com/CrisRonda/playerAppFlutter",
        label: f({ id: "seeGithub" }),
        icon:
          "https://res.cloudinary.com/dzh1db41l/image/upload/v1612649890/github-icon-white-6_m9z7xs.png",
      },
      techs: [{ alt: "Flutter", img: "/images/techs/15.svg" }],
    },
    // tracking
    {
      id: 4,
      title: f({ id: "folio3.title" }),
      solution: f({ id: "folio3.solution" }),
      problem: f({ id: "folio3.problem" }),
      photo: "https://media.giphy.com/media/mwEIQjYffdLrd2RWEn/giphy.gif",
      info: {
        link: "https://github.com/CrisRonda/TrackingApp",
        label: f({ id: "seeGithub" }),
        icon:
          "https://res.cloudinary.com/dzh1db41l/image/upload/v1612649890/github-icon-white-6_m9z7xs.png",
      },
      techs: [
        { alt: "React Native", img: "/images/techs/12.svg" },
        { alt: "Redux", img: "/images/techs/11.png" },
        {
          alt: "Background Geolocation",
          img:
            "https://res.cloudinary.com/dzh1db41l/image/upload/v1612647746/te_k3sw53.svg",
        },
      ],
    },
  ];
  return { content };
};

export default useContent;
