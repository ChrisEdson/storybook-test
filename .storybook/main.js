module.exports = {
  stories: ["../src/components/DesignSystemHeadlineFive.stories.tsx"],
  addons: [
    {
      name: "@storybook/addon-react-native-web",
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
};
