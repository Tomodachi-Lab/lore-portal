import styled from 'styled-components';
import { breakpoints, colors, fontFamilies, theme } from '../theme/theme';

const Table = styled.table`
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;

  tr {
    padding: 0.35em;
  }

  th,
  td {
    padding: 0.625em;
    text-align: left;
    border-bottom: 2px solid ${colors.greyConcrete};
  }

  th {
    font-size: 0.85em;
    letter-spacing: 0.1em;
    font-family: ${fontFamilies.titles};
    text-transform: uppercase;
    border-bottom: 2px solid ${colors.white};
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    border: 0;

    caption {
      font-size: 1.3em;
    }

    thead {
      display: none;
    }

    tr {
      display: block;
      margin-bottom: 0.625em;
    }

    td {
      display: flex;
      justify-content: space-between;
      font-size: 0.8em;
      text-align: right;
    }

    td::before {
      display: block;
      content: attr(data-label);
      font-weight: bold;
      text-transform: uppercase;

      margin-right: 33%;
    }

    td:last-child {
      border-bottom: 0;
    }
  }
`;

export default Table;
