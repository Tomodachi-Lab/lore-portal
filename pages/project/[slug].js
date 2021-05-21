import { useRouter } from 'next/router';
import React from 'react';
import getProjects from '../../src/data-handling/getProjects';
import ProjectPage from '../../src/views/ProjectPage';

const ProjectRoute = () => {
  const router = useRouter();
  const { slug } = router.query;

  const projects = getProjects();

  const projectIndex = projects.findIndex((project) => project.slug === slug);
  const project = projects[projectIndex];
  if (!project) return '';

  return (
    <ProjectPage
      project={project}
      next={projects[projectIndex + 1]}
      previous={projects[projectIndex - 1]}
    />
  );
};

export default ProjectRoute;
