import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import CandidatesForm from '../components/CandidatesForm';
import CandidatesTable from '../components/CandidatesTable';
import { GradientButton } from '../components/Button';
import Container from '../components/Container';
import Loader from '../components/Loader';
import { breakpoints, colors, theme } from '../theme/theme';
import useApi, { API_BASE_URL } from '../utils/useApi';

const Gradient = styled.div`
  height: 15em;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  color: white;

  > * {
    z-index: 1;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${theme.twitchGradient};
    background-size: 400% auto;

    animation-duration: 5s;
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

const Title = styled.h1`
  text-align: center;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.h3`
  text-align: center;
  font-weight: lighter;
  max-width: 35ch;
  margin: 0 auto;
`;

const Content = styled.section`
  line-height: 1.5;
  margin: 0 2em;
  padding: 0.5em;

  background: ${theme.mainBg};

  position: relative;
  z-index: 1;
`;

const Row = styled.div`
  margin: 3em 0;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;

    > * + * {
      margin-top: 3em;
    }
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Introduction = styled.div`
  font-weight: 100;
  margin: auto;
  max-width: 25em;

  > * + * {
    margin-top: 1em;
  }
`;

const Sketch = styled.img`
  max-width: 10em;
`;

const SendButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2em 0;
`;

const Grey = styled.section`
  padding: 2em 0;
  background: ${colors.grey};
  color: ${colors.white};

  min-height: 20rem;
`;

const FormContainer = styled(Container)`
  padding: 4em 0;
`;

const Candidates = ({ projects }) => {
  const [candidates, loading, error] = useApi('candidates');

  return (
    <section>
      <Gradient>
        <div>
          <Title>Partecipa a un progetto</Title>
          <Subtitle>Unisciti al nostro team creativo</Subtitle>
        </div>
      </Gradient>
      <Container>
        <Content>
          <Row>
            <Column>
              <Sketch src="/static/project-sketch.svg" />
            </Column>
            <Column>
              <Introduction>
                <p>
                  Se vuoi essere parte attiva in progetti legati alla community
                  questo è il posto giusto.
                </p>

                <p>
                  Cerchiamo talenti di qualunque tipo: musicisti, sceneggiatori,
                  illustratori, programmatori o qualsiasi altra cosa che pensi
                  di poter sfruttare al massimo per realizzare qualcosa di
                  grande.
                </p>

                <p>
                  Riempi il form qui sotto e verrai contattato quanto prima per
                  entrare nel gruppo creativo di Tomodachi Lab.
                </p>
              </Introduction>
            </Column>
          </Row>
          <Subtitle>A scrivere queste parole potresti essere tu</Subtitle>
          <SendButtonContainer>
            <Link href="#form">
              <GradientButton gradientColors={[colors.lavender, colors.twitch]}>
                Candidati
              </GradientButton>
            </Link>
          </SendButtonContainer>
        </Content>
      </Container>
      <Grey>
        <Container>
          <Title as="h2">I candidati</Title>
          {!loading && !error && candidates ? (
            <CandidatesTable projects={projects} items={candidates} />
          ) : (
            <Loader color={colors.lavender} />
          )}
        </Container>
      </Grey>
      <FormContainer id="form">
        <Subtitle as="h2">Compila il form per partecipare ai progetti</Subtitle>
        <CandidatesForm
          projects={projects}
          callback={(payload) => {
            return fetch(`${API_BASE_URL}/candidates`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(payload),
            });
          }}
        />
      </FormContainer>
    </section>
  );
};

export default Candidates;
