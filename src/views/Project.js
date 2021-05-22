import Link from 'next/link';
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
  z-index: 0;
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
  padding: 1em;
  word-break: break-word;
  background: ${colors.white};
  margin: 1em 0;

  img {
    display: block;
    max-width: 100%;
    margin: auto;
  }

  p {
    margin-bottom: 1em;
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
  span {
    display: inline-flex;
  }

  > * {
    padding: 0.25em;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  }

  > * {
    cursor: pointer;

    &:hover {
      opacity: 0.75;
    }
  }
`;

const Author = styled.div`
  display: flex;

  > h4 {
    margin-left: 0.25em;
  }
`;

const Project = ({ project }) => {
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
                <Link
                  key={category}
                  href={{
                    pathname: '/search',
                    query: {
                      category,
                    },
                  }}
                >
                  <span>
                    <Category category={category} />
                  </span>
                </Link>
              ))}
            </Categories>
          </Details>
        </SplashImage>
        <Body dangerouslySetInnerHTML={{ __html: project.body }} />
      </Content>
    </Container>
  );
};

export default Project;
