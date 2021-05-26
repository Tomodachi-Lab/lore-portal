import styled from 'styled-components';
import { colors, theme } from '../theme/theme';

const Button = styled.button`
  color: ${colors.white};
  font-size: 1.5em;
  padding: 1em;
  border: 0;
  cursor: pointer;

  transition: all 200ms ease-in-out;

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(-1px);
  }

  &:disabled {
    background: ${colors.greyIron};
  }
`;

export const GradientButton = styled(Button)`
  &:hover {
    background-position: right center;
  }

  background-size: 200% auto;
  background-image: linear-gradient(
    120deg,
    ${({ gradientColors }) => gradientColors[0]} 0%,
    ${({ gradientColors }) => gradientColors[1]} 50%,
    ${({ gradientColors }) => gradientColors[0]} 100%
  );
`;

export default Button;
