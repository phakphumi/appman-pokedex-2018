import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Deck from '../components/Deck';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchModal from '../components/SearchModal';
import { selectShowSearchModal } from '../redux/selectors';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%
`;

const HomePage = React.memo(() => {
  const showSearchModal = useSelector(selectShowSearchModal);

  return (
    <Container>
      <Header />
      <Deck />
      <Footer />
      {showSearchModal && <SearchModal />}
    </Container>
  );
});

export default HomePage;
