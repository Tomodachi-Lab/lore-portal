import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGamepad,
  faKeyboard,
  faMusic,
  faPalette,
  faShapes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme/theme';
import {
  categories,
  categoriesColors,
  categoriesIcons,
} from '../utils/categories';

library.add(faGamepad, faMusic, faPalette, faKeyboard, faShapes);

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0.5em;
  border-radius: 1.5em;
  color: white;

  background: ${({ color, useColor }) => (useColor ? color : 'transparent')};
  border: 2px solid
    ${({ color, useColor }) => (useColor ? color : colors.white)};

  > * + * {
    margin-left: 0.5em;
  }
`;

const Category = ({ category, useColor = true }) => {
  return (
    <Wrapper color={categoriesColors[category]} useColor={useColor}>
      <FontAwesomeIcon icon={['fa', categoriesIcons[category]]} />

      <span>{categories[category]}</span>
    </Wrapper>
  );
};

export default Category;
