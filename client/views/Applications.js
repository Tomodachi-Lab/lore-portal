import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import ApplicationsForm from '../components/ApplicationsForm';
import ApplicationsTable from '../components/ApplicationsTable';
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
    background-image: ${theme.preliveGradient};
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

const Applications = () => {
  const [applications, loading, error] = useApi('project-applications');

  return (
    <section>
      <Gradient>
        <div>
          <Title>Proponi la tua idea</Title>
          <Subtitle>Trasforma il tuo progetto creativo in realtà</Subtitle>
        </div>
      </Gradient>
      <Container>
        <Content>
          <Row>
            <Column>
              <Introduction>
                <p>
                  Siamo sempre alla ricerca di nuovi progetti su cui riversare
                  la nostra creatività.
                </p>

                <p>
                  Non farti fermare dagli ostacoli iniziali, è ora di prendere
                  quell'idea che ti si è fissata in testa e dargli l'opportunità
                  che si merita.
                </p>

                <p>
                  Riempi il form qui sotto e dacci quanti più dettagli
                  possibili, non preoccuparti se è solo un'idea, possiamo
                  aiutarti a renderla reale.
                </p>
              </Introduction>
            </Column>
            <Column>
              <Sketch src="/static/project-sketch.svg" />
            </Column>
          </Row>
          <Subtitle>
            Hai un'idea per un progetto, ma non il supporto giusto per
            realizzarlo?
          </Subtitle>
          <SendButtonContainer>
            <Link href="#form">
              <GradientButton
                gradientColors={[colors.redRadical, colors.orangeSunshade]}
              >
                Inviaci la tua idea
              </GradientButton>
            </Link>
          </SendButtonContainer>
        </Content>
      </Container>
      <Grey>
        <Container>
          <Title as="h2">I progetti proposti</Title>
          {!loading && !error && applications ? (
            <ApplicationsTable items={applications} />
          ) : (
            <Loader color={colors.orangeSunshade} />
          )}
        </Container>
      </Grey>
      <FormContainer id="form">
        <Subtitle as="h2">Compila il form per inviarci la tua idea</Subtitle>
        <ApplicationsForm
          callback={(payload) => {
            return fetch(`${API_BASE_URL}/project-applications`, {
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

export default Applications;
