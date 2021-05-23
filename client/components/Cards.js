import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../theme/theme';
import Card from './Card';

const Grid = styled.section`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5em;

  @media screen and (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Cards = ({ projects }) => {
  return (
    <Grid>
      {projects.map((project) => (
        <Card key={`card-${project.slug}`} project={project} />
      ))}
    </Grid>
  );
};

export default Cards;
