import { promises as fs } from 'fs';
import path from 'path';
import React from 'react';
import Meta from '../client/components/Meta';
import Search from '../client/components/Search';
import getProjects from '../server/getProjects';

const App = ({ projects }) => {
  return (
    <>
      <Meta title="Search" />
      <Search projects={projects} />
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
