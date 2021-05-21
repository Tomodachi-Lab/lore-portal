import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { colors } from '../theme/theme';

const Wrapper = styled.header`
  background: ${colors.black};
  color: ${colors.white};

  position: sticky;
  z-index: 40;
  top: 0;

  display: flex;
  align-items: center;
  padding: 1.5em 1em;

  a {
    color: ${colors.white};
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Link href="/">Home</Link>
    </Wrapper>
  );
};

export default Header;
