import React from 'react';
import { useSelector } from 'react-redux';

import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchModal from '../components/SearchModal';
import { selectShowSearchModal } from '../redux/selectors';

const HomePage = () => {
  const showSearchModal = useSelector(selectShowSearchModal);

  return (
    <>
      <Header />
      <Footer />
      {showSearchModal && <SearchModal />}
    </>
  );
};

export default HomePage;
