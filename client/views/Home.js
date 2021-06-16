import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Attribution from '../components/Attribution';
import Card from '../components/Card';
import Container from '../components/Container';
import { breakpoints, colors, theme } from '../theme/theme';

const marginBottom = `${12.5}em`;

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

const CardsContainer = styled.section`
  margin: 0 2em;
  margin-top: -${marginBottom};
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

const Grid = styled.section`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5em;

  @media screen and (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Button = styled.button`
  color: ${colors.white};
  font-size: 2em;
  padding: 1em;
  border: 0;
  cursor: pointer;

  background-size: 200% auto;
  transition: all 200ms ease-in-out;

  &:hover {
    transform: translateY(-3px);
    background-position: right center;
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const Applications = styled(Button)`
  background-image: linear-gradient(
    120deg,
    ${colors.redRadical} 0%,
    ${colors.orangeSunshade} 50%,
    ${colors.redRadical} 100%
  );
`;

const Candidates = styled(Button)`
  background-image: linear-gradient(
    120deg,
    ${colors.twitch} 0%,
    ${colors.lavender} 50%,
    ${colors.twitch} 100%
  );
`;

const Logo = styled.img`
  position: relative;
  z-index: 2;
  height: 20em;
  max-width: 100%;
  height: calc(100% - ${marginBottom});
  padding: 4em;
  margin-bottom: ${marginBottom};
`;

const Home = ({ projects, home }) => {
  const { splashImage, attribution, attributionLink } = home;

  return (
    <section>
      <SplashImage image={splashImage}>
        <AttributionContainer>
          <Attribution name={attribution} url={attributionLink} />
        </AttributionContainer>
        <Logo src="/static/logo-color.svg" />
      </SplashImage>
      <Container>
        <CardsContainer>
          <Grid>
            <Link href="/applications">
              <Applications>Proponi un progetto</Applications>
            </Link>
            <Link href="/candidates">
              <Candidates>Partecipa a un progetto</Candidates>
            </Link>
            {[...projects].splice(0, 6).map((project) => (
              <Card key={`card-${project.slug}`} project={project} />
            ))}
          </Grid>
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
