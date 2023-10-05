import type { Meta, StoryObj } from '@storybook/react';

import SocialMediaSection from './SocialMediaSection';

const meta = {
  title: 'Sections/SocialMediaSection',
  component: SocialMediaSection,
  tags: ['autodocs'],
} satisfies Meta<typeof SocialMediaSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};