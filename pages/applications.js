import { promises as fs } from 'fs';
import path from 'path';
import React from 'react';
import { getProjectApplicationsPublished } from '../server/sheet';
import Meta from '../client/components/Meta';
import getProjects from '../server/getProjects';
import Applications from '../client/views/Applications';

const App = ({ projects, applications }) => {
  return (
    <>
      <Meta title="Partecipa a un progetto" />
      <Applications projects={projects} applications={applications} />
    </>
  );
};

export default App;

export async function getStaticProps() {
  const [projects, applications] = await Promise.all([
    getProjects(path, fs),
    getProjectApplicationsPublished(),
  ]);

  return {
    props: {
      projects,
      applications,
    },
  };
}
