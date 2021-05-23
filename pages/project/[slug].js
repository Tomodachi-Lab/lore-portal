import glob from 'glob';
import React from 'react';
import Meta from '../../client/components/Meta';
import mapProject from '../../server/mapProject';
import Project from '../../client/views/Project';

const ProjectRoute = ({ project }) => {
  return (
    <>
      <Meta title={project.title} image={project.image} />
      <Project project={project} />
    </>
  );
};

export default ProjectRoute;

export async function getStaticPaths() {
  const blogs = glob.sync('data/projects/**/*.json');

  const paths = blogs.map(
    (fullPath) => `/project/${fullPath.split('/').pop().replace('.json', '')}`
  );

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const project = mapProject(require(`../../data/projects/${slug}.json`));

  return { props: { project: project } };
}
