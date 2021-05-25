import { promises as fs } from 'fs';
import path from 'path';
import React from 'react';
import Meta from '../client/components/Meta';
import Applications from '../client/views/Applications';
import getProjects from '../server/getProjects';

const App = ({ projects }) => {
  return (
    <>
      <Meta title="Partecipa a un progetto" />
      <Applications projects={projects} />
    </>
  );
};

export default App;

export async function getStaticProps() {
  const projects = await getProjects(path, fs);

  return {
    props: {
      projects,
    },
  };
}
