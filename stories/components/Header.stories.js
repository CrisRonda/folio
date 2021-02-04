import Banner from "../../src/screens/Home";
const Story = () => <Banner />;

// Here we export a variant of the default template passing props
export const HeaderStory = Story.bind({});
HeaderStory.args = {};

// Here we export a variant of the default template passing props

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: "Welcome/Components/Header",
  component: Banner,
};
