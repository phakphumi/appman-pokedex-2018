import React from 'react';
import { useSelector } from 'react-redux';

import Footer from '../components/Footer';
import SearchModal from '../components/SearchModal';
import { selectShowSearchModal } from '../redux/selectors';

const HomePage = () => {
  const showSearchModal = useSelector(selectShowSearchModal);

  return (
    <>
      <Footer />
      {showSearchModal && <SearchModal />}
    </>
  );
};

export default HomePage;
