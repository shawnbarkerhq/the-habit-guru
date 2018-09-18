import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <section
        id="contact"
        className="section section-contact center scrollspy"
      >
        <div className="container">
          <div className="row">
            <div className="col s12 m6 offset-m6">
              <div className="card-panel z-depth-5">
                <h4>
                  <span className="thg-red">Contact</span>
                  <span className="thg-thin-font">Us</span>
                </h4>
                <form>
                  <input id="name" type="text" name="name" placeholder="name" />
                  <input id="email" type="email" name="email" />
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    placeholder="phone"
                  />
                  <input
                    placeholder="Message"
                    name="message"
                    label="message"
                    info="Please leave a message"
                  />
                  <input
                    type="submit"
                    value="Submit"
                    className="btn blue-grey"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
