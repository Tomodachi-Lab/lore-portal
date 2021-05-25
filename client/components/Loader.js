import styled from 'styled-components';
import { theme } from '../theme/theme';

const Spinner = styled.div`
  min-width: 2.5em;
  min-height: 2.5em;
  border: 0.25em solid rgba(255, 255, 255, 0.1);
  border-right: 0.25em solid ${({ color }) => color || theme.primary};
  border-radius: 50%;
  animation: spinner 1s linear infinite;

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = ({ color }) => {
  return (
    <SpinnerContainer>
      <Spinner color={color} />
    </SpinnerContainer>
  );
};

export default Loader;
