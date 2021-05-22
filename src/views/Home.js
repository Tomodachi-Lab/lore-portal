import React from 'react';
import styled from 'styled-components';
import { breakpoints, colors, theme } from '../theme/theme';
import Cards from '../components/Cards';
import Container from '../components/Container';

const SplashImage = styled.div`
  height: calc(100vh - 15rem);
  width: 100%;
  background-image: url('${({ image }) => image}');
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  z-index: -1;

  @media screen and (max-width: ${breakpoints.tablet}) {
    height: 100vh;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;

      width: 100%;
      height: 100%;
      background: ${colors.black};
      opacity: 0.5;
    }
  }
`;

const Title = styled.h1`
  position: relative;
  z-index: 2;
  font-size: 8em;
  text-transform: uppercase;
  color: ${colors.white};
  text-align: center;

  @media screen and (max-width: ${breakpoints.tablet}) {
    font-size: 5em;
  }
`;

const CardsContainer = styled.section`
  margin: 0 2em;
  margin-top: -8em;
  margin-bottom: 8em;
  padding: 0.5em;

  background: ${theme.mainBg};
`;

const Home = ({ projects, home }) => {
  const { splashImage } = home;

  return (
    <section>
      <SplashImage image={splashImage}>
        <Title>Tomodachi Lab</Title>
      </SplashImage>
      <Container>
        <CardsContainer>
          <Cards projects={[...projects].splice(0, 6)} />
        </CardsContainer>
      </Container>
    </section>
  );
};

export default Home;
