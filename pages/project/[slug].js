import React from 'react';
import Meta from '../../src/components/Meta';
import getProjects, { mapProject } from '../../src/data-handling/getProjects';
import ProjectPage from '../../src/views/ProjectPage';

const projects = getProjects();

const ProjectRoute = ({ project }) => {
  const mappedProject = mapProject(project);
  return (
    <>
      <Meta title={project.title} image={project.image} />
      <ProjectPage project={mappedProject} />
    </>
  );
};

export default ProjectRoute;

export async function getStaticPaths() {
  const paths = projects.map(({ slug }) => {
    return { params: { slug } };
  });
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const currentProject = params.slug;
  const project = projects.find(({ slug }) => slug === currentProject) || {
    notfound: true,
  };

  return { props: { project } };
}
