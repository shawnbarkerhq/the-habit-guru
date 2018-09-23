import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import cartoonMe from '../../assets/images/prayer-pose.png';

class About extends Component {
  render() {
    return (
      <section id="about" className="about">
        <Helmet>
          <title>About Joshua Barker</title>
        </Helmet>
        <div className="row">
          <div className="col s12">
            <div className="card-panel grey lighten-5 z-depth-1">
              <div className="row valign-wrapper">
                <div className="col s12 offset-s2 m10 l8 offset-l2">
                  <h3>
                    About
                    <span className="thg-blue"> Joshua</span>
                  </h3>
                  <p className="black-text">The Habit Guru</p>

                  <p className="">
                    Pursuing your dreams, desires, and goals – finding a purpose
                    in life and helping others achieve the same thing is what
                    inspires me each day. Joshua “Tree” Barker started his epic
                    journey of self-improvement, spirituality, and
                    self-awareness seven years ago, it has changed the way he
                    views life. Creative, compassionate, intuitive, and
                    adaptable are a few traits that you can find in Josh.
                  </p>
                  <blockquote className="about-quote">
                    “Words cannot express my love and passion for people and
                    business!”
                  </blockquote>
                  <p>
                    Growing up in San Diego CA Joshua “Tree” Barker has a
                    positive free spirit about himself, who enjoys the outdoors,
                    cooking, basketball, and is someone who can’t be away from
                    the water for too long. Berkley College gave Josh the
                    opportunity to obtain his professional education and
                    knowledge of business management. Creating companies from
                    ground level to thriving success has been Josh’s breakfast,
                    lunch, and dinner over the last 7 years.
                  </p>
                  <blockquote className="about-quote">
                    “How can I help more people now?”
                  </blockquote>
                  <p>
                    Over the last seven years Josh has ran his own company,
                    working with many small business owners to national clients
                    helping them achieve their desires though ownership of real
                    estate. Josh has worked with several SBA lenders in this
                    process to align small business owner with the capital
                    needed to grow.{' '}
                  </p>
                  <blockquote className="about-quote">
                    “I love helping and seeing small business owner realize and
                    achieve their goals!”{' '}
                  </blockquote>
                  <blockquote className="about-quote">
                    ”It feels so special to be a part of that unforgettable
                    process.”
                  </blockquote>
                  <p>
                    Working with local, regional and national brands have given
                    Josh skills that are invaluable in areas such as discipline,
                    patience, persistence, communication, focus, and drive. Josh
                    takes pride in the fact that he can adapt, understand, and
                    put into action quickly any task at hand, which skills are
                    critical for change. Josh credits this from his failures and
                    successes in business.
                  </p>
                  <blockquote className="about-quote">
                    “If something is not right, out of place, not working, you
                    need to fix it right away or that something can leak into
                    other areas of your life and business.” “I learned a long
                    time ago that the best time to start making a change is
                    now.”{' '}
                  </blockquote>
                  <p>
                    As Joshua “Tree” Barker takes from his passion of helping
                    small business owners achieve their goals his next chapter
                    in life will be, helping people become more aware of their
                    own habits and routines.{' '}
                  </p>
                  <blockquote className="about-quote">
                    “I get such excitement when I see a small business owner
                    achieve their goals, I want to spread that feeling to
                    everyone, not just a small business owner! Our goals,
                    passions, desires, and dreams can all be achieved if we wake
                    up to our habits and routines that hinder us from achieving
                    those things. Putting out into the universe your desires are
                    a powerful thing! I am right now declaring the success of IQ
                    Effect INC. purposefully and profitably as I set out with my
                    Co-Founder and brother on this journey to achieve
                    self-awareness in other people in making this world a better
                    place.”{' '}
                  </blockquote>
                </div>
                <div className="col s2 l4 hide-on-med-and-down">
                  <img
                    src={cartoonMe}
                    alt="Joshua Tree Barker"
                    className="responsive-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
