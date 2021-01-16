import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { searchCard } from '../apis/card';
import { COLORS } from '../styles/colors';
import { useDebounce } from '../utils/useDebounce';

const InputStyled = styled.input`
  background: white url(/../search.png) right no-repeat;
  background-size: 50px 50px;
  padding-right: 50px;
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  font-size: 30px;

  border-color: ${COLORS.Metal};
`;

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState();
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  useEffect(() => {
    (async () => {
      const cards = await searchCard(debouncedSearchTerm);
    })()
  }, [debouncedSearchTerm]);
  return (
    <InputStyled placeholder="Find pokemon" onChange={(event) => setSearchTerm(event?.target?.value)} />
  );
};

export default SearchInput;
