module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
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
