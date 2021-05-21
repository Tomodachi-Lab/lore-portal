import React from 'react';
import Meta from '../src/components/Meta';
import getProjects from '../src/data-handling/getProjects';
import home from '../src/data/home.json';
import Home from '../src/views/Home';

const App = () => {
  const projects = getProjects();

  return (
    <>
      <Meta title="Home" />
      <Home projects={projects} home={home} />
    </>
  );
};

export default App;
