import React from 'react';
import Header from '../components/Header';
import ImgSlide from '../components/Main/ImgSlide';
import IntroCompany from '../components/Main/IntroCompany';
import IntroCompany2 from '../components/Main/IntroCompany2';
import Footer from '../components/Footer';

function Main() {
  return (
    <>
      <Header />
      <ImgSlide />
      <IntroCompany />
      <IntroCompany2 />
      <Footer />
    </>
  )
}

export default Main;