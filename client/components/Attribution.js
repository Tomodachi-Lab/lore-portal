import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme/theme';

const Wrapper = styled.div`
  font-size: 0.75em;
  cursor: pointer;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  overflow: hidden;
  transition: opacity 400ms;

  > span {
    background: ${colors.grey};
    padding: 0.5em;
    margin-right: -0.5em;

    position: relative;
    z-index: 1;

    white-space: nowrap;
    border-top-left-radius: 2em;
    border-bottom-left-radius: 2em;

    opacity: 0;
    transform: translateX(10%);
    transform-origin: 0 0;
    transition: transform 150ms ease-in-out, opacity 200ms;
  }

  &:hover {
    opacity: 0.75;
    span {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

const Icon = styled.div`
  position: relative;
  z-index: 2;

  font-size: 2em;
  border-radius: 2em;
  width: 1.5em;
  height: 1.5em;
  background: ${colors.grey};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Attribution = ({ name, url }) => {
  return (
    <a href={url}>
      <Wrapper>
        <span>{name}</span>
        <Icon>
          <FontAwesomeIcon icon={faInfoCircle} />
        </Icon>
      </Wrapper>
    </a>
  );
};

export default Attribution;
