import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import { theme } from '../theme/theme';

const Gradient = styled.div`
  height: calc(100vh - 15rem);
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${theme.applicationsGradient};
    background-size: 200% auto;

    animation-duration: 20s;
    animation-timing-function: ease;
    animation-name: moveBackground;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    @keyframes moveBackground {
      0% {
      }

      100% {
        background-position: right center;
      }
    }
  }
`;

const Applications = ({ projects, applications }) => {
  return (
    <section>
      <Gradient />
      <Container></Container>
    </section>
  );
};

export default Applications;
