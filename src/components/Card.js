import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { colors, theme } from '../theme/theme';

const Title = styled.h2`
  position: relative;
  z-index: 3;
  color: ${theme.mainBg};
  text-align: center;

  transition: all 250ms ease-in-out;
`;

const Wrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  overflow: hidden;

  background: ${colors.black};

  cursor: pointer;

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
  }

  &:before {
    content: '';
    display: block;
    height: 0;
    width: 0;
    padding-bottom: calc(9 / 16 * 100%);
  }
`;

const Card = ({ project }) => {
  return (
    <Link href={`/project/${project.slug}`}>
      <Wrapper image={project.image}>
        <div className="backdrop" />
        <Title>{project.title}</Title>
      </Wrapper>
    </Link>
  );
};

export default Card;
