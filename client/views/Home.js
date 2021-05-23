import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Attribution from '../components/Attribution';
import Cards from '../components/Cards';
import Container from '../components/Container';
import { breakpoints, colors, theme } from '../theme/theme';

const SplashImage = styled.div`
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
    background-image: url('${({ image }) => image}');
    background-size: cover;
    background-position: center;

    animation-duration: 40s;
    animation-timing-function: ease;
    animation-name: zoomMove;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    @keyframes zoomMove {
      0% {
        transform-origin: bottom left;
        transform: scale(1);
      }
      100% {
        transform: scale(1.2);
      }
    }
  }

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
    font-size: 3.5em;
  }
`;

const CardsContainer = styled.section`
  margin: 0 2em;
  margin-top: -3em;
  padding: 0.5em;

  background: ${theme.mainBg};

  position: relative;
  z-index: 1;
`;

const AttributionContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  padding: 1.5em;
  z-index: 20;
`;

const ShowAll = styled.h1`
  text-align: center;
  padding: 2rem 0;
`;

const Home = ({ projects, home }) => {
  const { splashImage, attribution, attributionLink } = home;

  return (
    <section>
      <SplashImage image={splashImage}>
        <AttributionContainer>
          <Attribution name={attribution} url={attributionLink} />
        </AttributionContainer>
        <Title>Tomodachi Lab</Title>
      </SplashImage>
      <Container>
        <CardsContainer>
          <Cards projects={[...projects].splice(0, 6)} />
        </CardsContainer>
        {projects.length > 6 && (
          <ShowAll>
            <Link href="/search">Vedi tutti i progetti</Link>
          </ShowAll>
        )}
      </Container>
    </section>
  );
};

export default Home;
