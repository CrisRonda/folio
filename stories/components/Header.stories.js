import Banner from "../../src/screens/Home";
const Story = () => <Banner />;

export const HeaderStory = Story.bind({});
HeaderStory.args = {};

export default {
  title: "Components/Header",
  component: Banner,
};
