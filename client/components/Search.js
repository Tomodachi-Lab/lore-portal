import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import Category from './Category';
import Container from './Container';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { breakpoints } from '../theme/theme';

const CATEGORIES = ['games', 'music', 'illustration', 'other'];

const SearchContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;

const Panel = styled.section`
  padding: 1em;
`;

const Filters = styled(Panel)`
  > * {
    padding: 0.25em;
  }
`;

const ResultsContainer = styled(Panel)`
  display: grid;

  grid-gap: 1em;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen and (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }

  font-size: 0.8em;
`;

const Button = styled.span`
  display: inline-block;
  cursor: pointer;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
`;

const Search = ({ projects }) => {
  const router = useRouter();
  const { query } = router;

  const selectedCategories = Array.isArray(query.category || [])
    ? query.category || CATEGORIES
    : [query.category];

  const [results, setResults] = useState(projects);

  useEffect(() => {
    const { s, category } = query;

    const applySearchQuery = (projects) => {
      if (!s) {
        return projects;
      }

      return projects.filter(
        (project) =>
          project.title.toLowerCase().includes(s.toLowerCase()) ||
          project.author.toLowerCase().includes(s.toLowerCase())
      );
    };

    const applyCategoryFilter = (projects) => {
      const selectedCategories = Array.isArray(category || [])
        ? category || CATEGORIES
        : [category];

      return projects.filter((project) =>
        selectedCategories.some((category) =>
          project.categories.includes(category)
        )
      );
    };

    const results = applySearchQuery(projects);
    const filteredResults = applyCategoryFilter(results);

    setResults(filteredResults);
  }, [query]);

  const toggleCategory = (category) => {
    const applySelection = (selection) => {
      router.push(
        {
          pathname: '/search',
          query: {
            s: query.s,
            category: selection,
          },
        },
        undefined,
        {
          shallow: true,
        }
      );
    };

    if (selectedCategories.includes(category)) {
      applySelection([
        ...selectedCategories.filter((item) => item !== category),
      ]);
      return;
    }

    applySelection([...selectedCategories, category]);
  };

  const isCategorySelected = (category) =>
    selectedCategories.includes(category);

  return (
    <SearchContainer>
      <Filters>
        {CATEGORIES.map((category) => (
          <Button
            key={category}
            active={isCategorySelected(category)}
            onClick={() => toggleCategory(category)}
          >
            <Category category={category} />
          </Button>
        ))}
      </Filters>
      <ResultsContainer>
        {results.map((project) => (
          <Card key={`card-${project.slug}`} project={project} />
        ))}
      </ResultsContainer>
    </SearchContainer>
  );
};

export default Search;
