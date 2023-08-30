import type { Meta, StoryObj } from '@storybook/react';

import ProjectsSection from './ProjectsSection';

const meta = {
  title: 'Sections/ProjectsSection',
  component: ProjectsSection,
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};