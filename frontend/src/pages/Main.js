import React from 'react';
import Header from '../components/Header';
import ImgSlide from '../components/Main/ImgSlide';
import IntroCompany from '../components/Main/IntroCompany';
import Footer from '../components/Footer';
import { animations } from 'react-animation';

function Main() {
  return (
    <div style={{animation : animations.fadeIn}}>
      <Header />
      <ImgSlide />
      <IntroCompany />
      <Footer />
    </div>
  )
}

export default Main;