import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { breakpoints, colors, theme } from '../theme/theme';
import Category from './Category';

const Title = styled.h2`
  position: relative;
  z-index: 3;
  color: ${theme.mainBg};
  text-align: center;
  padding: 1rem;
  transition: all 250ms ease-in-out;

  @media screen and (max-width: ${breakpoints.tablet}) {
    position: absolute;
    top: 0;
  }
`;

const Wrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  overflow: hidden;

  background: ${colors.black};

  cursor: pointer;

  .category {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1em;
    z-index: 3;

    opacity: 0.5;

    transition: opacity 400ms ease-in-out;

    display: flex;
    align-items: center;

    @media screen and (max-width: ${breakpoints.tablet}) {
      opacity: 0.8;
      font-size: 0.8em;
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    transition: all 400ms ease-in-out;

    z-index: 1;
    background-image: url('${({ image }) => image}');
    background-size: cover;
    background-position: center;
    opacity: 0.66;
  }

  &:hover {
    ${Title} {
      transform: scale(1.2);
    }

    &:after {
      transform: scale(1.2);
      opacity: 0.33;
    }

    .category {
      opacity: 0.8;
    }
  }

  &:before {
    content: '';
    display: block;
    height: 0;
    width: 0;
    padding-bottom: calc(9 / 16 * 100%);
  }
`;

const Author = styled.div`
  color: ${colors.white};
  display: flex;
  align-items: center;
  margin-left: 0.5em;

  > h4 {
    margin-left: 0.25em;
  }
`;

const Card = ({ project }) => {
  return (
    <Link href={`/project/${project.slug}`}>
      <Wrapper image={project.image}>
        <div className="backdrop" />
        <Title>{project.title}</Title>
        <div className="category">
          <Category category={project.categories[0]} useColor={false} />
          <Author>
            by <h4>{project.author}</h4>
          </Author>
        </div>
      </Wrapper>
    </Link>
  );
};

export default Card;
