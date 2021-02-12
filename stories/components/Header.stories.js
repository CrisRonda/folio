import Header from "../../src/screens/Home";
const Story = () => <Header />;

export const HeaderStory = Story.bind({});
HeaderStory.args = {};

export default {
  title: "Components/Header",
  component: Header,
};
