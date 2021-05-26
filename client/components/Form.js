import styled from 'styled-components';
import { colors, theme } from '../theme/theme';

const Form = styled.form`
  padding: 0 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 50ch;
  margin: auto;

  fieldset {
    border: 0;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 1em 0;
    width: 100%;

    input,
    textarea,
    select {
      outline: none;
      border: 0;
      background: 0;
      font-size: 1.25em;

      font-family: inherit;
      margin: 0;
      padding: 0.5em 0;

      &::placeholder {
        color: ${colors.greyIron};
      }

      &:focus,
      &:active,
      &.filled,
      &.error {
        color: ${({ first }) => first || theme.primary};

        & + label {
          &:after {
            max-width: 100%;
          }

          span:after {
            background-position: 0% 50%;
          }
        }
      }

      &.filled::not(:focus) {
        & + label {
          &:after {
            background: ${theme.text};
          }

          span:after {
            background-image: linear-gradient(
              to right,
              ${theme.text} 50%,
              rgba(0, 0, 0, 0) 0%
            );
          }
        }
      }

      &.error {
        &::placeholder {
          color: red;
          opacity: 0.25;
        }

        & + label {
          &:after {
            background: red;
          }

          span:after {
            background-image: linear-gradient(
              to right,
              red 50%,
              rgba(0, 0, 0, 0) 0%
            );
          }
        }
      }
    }

    label {
      width: 100%;
      position: relative;

      color: ${colors.greyIron};

      &:before,
      &:after {
        position: absolute;
        top: 0;

        content: '';
        display: block;
        width: 100%;
        height: 2px;
        margin: 0.25em 0;
        border-radius: 1px;
      }

      &:before {
        background: currentColor;
      }

      &:after {
        max-width: 0;
        background: linear-gradient(
          120deg,
          ${({ first }) => first || theme.primary} 0%,
          ${({ second }) => second || theme.accent} 100%
        );
        transition: all 500ms cubic-bezier(0.215, 0.61, 0.355, 1);
      }

      font-size: 0.8em;
      text-transform: uppercase;
      font-weight: bold;

      > span {
        display: block;
        margin-top: calc(0.5em + 2px);

        &:after {
          content: attr(data-text);
          position: absolute;
          overflow: hidden;
          left: 0;
          transform: scaleX(1);
          white-space: nowrap;
          color: #fff;

          background-image: linear-gradient(
            to right,
            ${({ first }) => first || theme.primary} 50%,
            rgba(0, 0, 0, 0) 0%
          );
          background-position: 100% 50%;
          background-size: 200%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;

          backface-visibility: hidden;
          perspective: 1000;
          transform: translateZ(0);

          transition: all 500ms cubic-bezier(0.215, 0.61, 0.355, 1);
        }
      }
    }
  }
`;

export default Form;
