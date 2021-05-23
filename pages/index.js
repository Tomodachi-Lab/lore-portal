import { promises as fs } from 'fs';
import path from 'path';
import React from 'react';
import Meta from '../client/components/Meta';
import home from '../data/home.json';
import getProjects from '../server/getProjects';
import Home from '../client/views/Home';

const App = ({ projects }) => {
  return (
    <>
      <Meta title="Home" />
      <Home projects={projects} home={home} />
    </>
  );
};

export default App;

export async function getStaticProps() {
  const projects = await getProjects(path, fs);

  return {
    props: {
      projects: projects,
    },
  };
}
