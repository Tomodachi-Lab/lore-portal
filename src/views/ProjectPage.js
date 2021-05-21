import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import { theme } from '../theme/theme';

const Body = styled.p`
  img {
    display: block;
    max-width: 100%;
    margin: auto;
  }

  p {
    margin: 1em 0;
  }

  pre {
    max-width: 100%;
    overflow: auto;
    min-height: 5rem;
    white-space: pre-wrap;
  }

  blockquote {
    position: relative;
    margin-left: 2em;

    &:before {
      content: '';
      position: absolute;
      height: 100%;
      width: 0.25em;
      top: 0;
      left: -1em;
      background: ${theme.text};
    }
  }
`;

const ProjectPage = ({ project, next, previous }) => {
  return (
    <Container>
      <h1>{project.title} works!</h1>

      <Body dangerouslySetInnerHTML={{ __html: project.body }} />
    </Container>
  );
};

export default ProjectPage;
