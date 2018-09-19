import React from 'react';

import Slider from '../ui/slider/Slider';
import NewsletterSignUp from '../ui/newsletter/Newsletter';
import Learn from '../ui/learn/Learn';
import Contact from '../ui/contact/Contact';

const Home = () => {
  return (
    <div>
      <Slider />
      <NewsletterSignUp />
      <Learn />
      <Contact />
    </div>
  );
};

export default Home;
