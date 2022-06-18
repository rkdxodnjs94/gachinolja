import React from 'react';
import Header from '../components/Header';
import ImgSlide from '../components/Main/ImgSlide';
import IntroCompany from '../components/Main/IntroCompany';
import Footer from '../components/Footer';

function Main() {
  return (
    <>
      <Header />
        <ImgSlide />
      <IntroCompany />
      <Footer />
    </>
  )
}

export default Main;