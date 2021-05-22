import React from 'react';
import styled from 'styled-components';
import Category from '../components/Category';
import Container from '../components/Container';
import { breakpoints, colors, theme } from '../theme/theme';

const SplashImage = styled.div`
  height: auto;
  width: 100%;
  background-image: url('${({ image }) => image}');
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  position: relative;
  z-index: -1;
  padding: 2em;
  padding-left: 0;

  &:before {
    content: '';
    display: block;
    height: 0;
    width: 0;
    padding-bottom: calc(9 / 16 * 100%);

    @media screen and (max-width: ${breakpoints.tablet}) {
      padding-bottom: calc(10 / 9 * 100%);
    }
  }
`;

const Content = styled.section`
  padding: 1em;
`;

const Details = styled.div`
  background: rgba(0, 0, 0, 0.85);
  color: ${colors.white};
  padding: 2em;
`;

const Body = styled.div`
  max-width: 80ch;
  line-height: 1.5;
  font-size: 1.25em;
  padding: 0.5em;
  word-break: break-word;

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
    max-height: 5rem;
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

const Categories = styled.div`
  padding: 0.5em 0;
  > * + * {
    margin-left: 0.5em;
  }
`;

const Author = styled.div`
  display: flex;

  > h4 {
    margin-left: 0.25em;
  }
`;

const ProjectPage = ({ project }) => {
  return (
    <Container>
      <Content>
        <SplashImage image={project.image}>
          <Details>
            <h1>{project.title}</h1>
            <Author>
              by <h4>{project.author}</h4>
            </Author>
            <Categories>
              {project.categories.map((category) => (
                <Category key={category} category={category} />
              ))}
            </Categories>
          </Details>
        </SplashImage>

        <Body dangerouslySetInnerHTML={{ __html: project.body }} />
      </Content>
    </Container>
  );
};

export default ProjectPage;
