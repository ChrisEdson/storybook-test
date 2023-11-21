import { ComponentMeta, ComponentStory } from '@storybook/react';

import { HeadlineFive } from './DesignSystemHeadlineFive';

export default {
  title: 'Atoms/Typography/HeadlineFive',
  component: HeadlineFive,
  argTypes: {
    style: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof HeadlineFive>;

export const Basic: ComponentStory<typeof HeadlineFive> = args => (
  <HeadlineFive {...args} />
);

Basic.args = {
  children: 'Some text',
};
