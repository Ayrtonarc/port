import { render, screen } from '@testing-library/react';
import ProjectCard from '../components/ProjectCard';

test('renders a project card with title and action', () => {
  render(
    <ProjectCard
      title="Proyecto demo"
      description="Descripcion demo"
      url="https://example.com"
      icon="vision"
      category="Computer Vision"
      stack="PyTorch"
      result="Clasificacion"
    />
  );

  expect(screen.getByRole('heading', { name: /proyecto demo/i })).toBeTruthy();
  expect(screen.getByRole('link', { name: /abrir proyecto/i })).toBeTruthy();
});
