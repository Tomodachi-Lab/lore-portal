import { promises as fs } from 'fs';
import path from 'path';
import React from 'react';
import Meta from '../src/components/Meta';
import Search from '../src/components/Search';
import getProjects from '../src/utils/getProjects';

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
