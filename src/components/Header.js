import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from '../theme/theme';

const Wrapper = styled.header`
  background: ${colors.black};
  color: ${colors.white};

  position: sticky;
  z-index: 40;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5em 1em;

  @media screen and (max-width: ${breakpoints.tablet}) {
    flex-direction: column;

    position: relative;

    > * + * {
      margin-top: 1rem;
    }
  }

  a {
    color: ${colors.white};
  }
`;

const Left = styled.div``;

const Right = styled.div``;

const Search = styled.label`
  padding: 0.75em;
  background: ${colors.grey};
  border-radius: 2em;
  display: block;

  > input {
    border: 0;
    background: ${colors.grey};
    color: ${colors.white};
    outline: none;
    font-size: 1em;
    padding: 0 0.75em;

    &::placeholder {
      color: ${colors.greyConcrete};
    }
  }
`;

const Header = () => {
  const router = useRouter();

  const searchFocused = () => {
    if (router.route !== '/search') {
      router.push('/search');
    }
  };

  const search = (search) => {
    if (search) {
      router.push(`/search?s=${search}`, null, { shallow: true });
      return;
    }

    router.push('/search', null, { shallow: true });
  };

  return (
    <Wrapper>
      <Left>
        <Link href="/">Home</Link>
      </Left>
      <Right>
        <Search>
          <input
            type="text"
            name="q"
            size="14"
            placeholder="Cerca"
            onFocus={() => searchFocused()}
            onKeyUp={(event) => search(event.target.value)}
          />
          <FontAwesomeIcon icon={faSearch} />
        </Search>
      </Right>
    </Wrapper>
  );
};

export default Header;
