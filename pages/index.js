import React from 'react';
import getProjects from '../src/data-handling/getProjects';
import Home from '../src/views/Home';

const App = () => {
  const projects = getProjects();

  return <Home projects={projects} />;
};

export default App;
