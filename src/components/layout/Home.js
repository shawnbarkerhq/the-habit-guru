import React from 'react';

import Slider from '../ui/slider/Slider';
import NewsletterSignUp from '../ui/newsletter/Newsletter';
import Quote from '../ui/quote/Quote';
import Learn from '../ui/learn/Learn';
import BlogList from '../ui/blog-slider/BlogList';

const Home = () => {
  return (
    <div>
      <Slider />
      <NewsletterSignUp />
      <Quote />
      <Learn />
      <BlogList />
    </div>
  );
};

export default Home;
