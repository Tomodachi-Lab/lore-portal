import styled from 'styled-components';
import { theme } from '../theme/theme';

const Loader = styled.div`
  min-width: 2.5em;
  min-height: 2.5em;
  border: 0.03em solid rgba(255, 255, 255, 0.1);
  border-right: 0.03em solid ${theme.primary};
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

export default Loader;
