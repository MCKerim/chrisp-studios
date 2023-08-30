import type { Meta, StoryObj } from '@storybook/react';

import ProjectCard from './ProjectCard';

const meta = {
  title: 'Molecules/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Project Title',
    image: 'https://via.placeholder.com/150',
    link: 'https://github.com',
  },
};
