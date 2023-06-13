import React from 'react';

const Footer = () => {
  return (
    <footer className="footer footer--s1">
      <div className="container text-center">
        <div className="footer__line footer__line--first">
          <div className="row justify-content-center">
            <div className="col-12 col-md-5 col-lg-4 col-xl-4">
              <div className="contact footer__item">
                <address className="footer__address">
                  <p>Richardson, TX</p>
                  <p>
                    <a href="tel:214-901-7481">(214) 901-7481</a>
                  </p>
                  <p>
                    <a href="mailto:ctvendingsolutions@gmail.com">
                      ctvendingsolutions@gmail.com
                    </a>
                  </p>
                </address>
              </div>
            </div>

            <div className="col-12 col-md-7 col-lg-4 col-xl-4 text-center">
              <div className="row justify-content-sm-between justify-content-xl-start">
                <div className="footer__item">
                  <nav className="footer__navigation">
                    <ul>
                      <li>
                        <a href="/#about">About Us</a>
                      </li>
                      <li>
                        <a href="/#packages">Packages</a>
                      </li>
                      <li>
                        <a href="/products">Products</a>
                      </li>
                      <li>
                        <a href="/registration">Registration</a>
                      </li>
                      <li>
                        <a href="/contact">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__line footer__line--second">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto">
              <div className="footer__item">
                <a className="footer__logo site-logo" href="index.html">
                  <img
                    src="img/logo/ctvendlogowhite.svg"
                    width="155"
                    height="40"
                    alt="demo"
                  />
                </a>
              </div>
            </div>

            <div className="col-auto">
              <div className="footer__item">
                <p className="__copy">
                  Copyright © {new Date().getFullYear()} CT Vending Powered by{' '}
                  <a href="http://nuonse.com" target="_blank">
                    Nuonse
                  </a>{' '}
                  | <a href="JavaScript:void(0);">Terms & Privacy</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
