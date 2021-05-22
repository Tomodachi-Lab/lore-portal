import { promises as fs } from 'fs';
import path from 'path';
import React from 'react';
import Meta from '../src/components/Meta';
import home from '../src/data/home.json';
import mapProject from '../src/utils/mapProject';
import Home from '../src/views/Home';

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
  const projectsDirectory = path.join(process.cwd(), 'src/data/projects');
  const fileNames = await fs.readdir(projectsDirectory);

  const projects = (
    await Promise.all(
      fileNames.map(async (fileName) => {
        const filePath = path.join(projectsDirectory, fileName);
        const fileContents = await fs.readFile(filePath, 'utf8');

        return {
          slug: fileName.replace('.json', ''),
          ...JSON.parse(fileContents),
        };
      })
    )
  ).map(mapProject);

  return {
    props: {
      projects: projects,
    },
  };
}
