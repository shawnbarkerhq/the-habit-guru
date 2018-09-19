import React from 'react';

import Slider from '../ui/slider/Slider';
import NewsletterSignUp from '../ui/newsletter/Newsletter';
import Quote from '../ui/quote/Quote';
import Learn from '../ui/learn/Learn';
import BlogSlider from '../ui/blog-slider/BlogSlider';
import Contact from '../ui/contact/Contact';

const Home = () => {
  return (
    <div>
      <Slider />
      <NewsletterSignUp />
      <Quote />
      <Learn />
      <BlogSlider />
      <Contact />
    </div>
  );
};

export default Home;
