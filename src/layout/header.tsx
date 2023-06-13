import React from 'react';

const Header = () => {
  return (
    <>
      <header
        id="top-bar"
        className="top-bar top-bar--s1"
        data-nav-fixed="true"
        data-nav-anchor="false"
      >
        <div className="top-bar__line-menu    compensate-for-scrollbar">
          <div className="top-bar__side-menu-button js-side-menu-toggler">
            <span></span>
          </div>

          <a className="top-bar__logo site-logo" href="/">
            <img
              className="img-fluid"
              src="img/logo/ctvendlogofullv2.svg"
              width="150"
              height="75"
              alt="demo"
            />
          </a>

          <a
            id="top-bar__navigation-toggler"
            className="top-bar__navigation-toggler"
            href="javascript:void(0);"
          >
            <span></span>
          </a>

          <div className="top-bar__collapse">
            <div>
              <nav
                id="top-bar__navigation"
                className="top-bar__navigation"
                role="navigation"
              >
                <ul>
                  <li>
                    <a className="nav-link active" href="/">
                      Home
                    </a>
                  </li>

                  <li>
                    <a className="nav-link" href="/#packages">
                      Packages
                    </a>
                  </li>

                  <li>
                    <a className="nav-link" href="/products">
                      Products
                    </a>
                  </li>

                  <li>
                    <a className="nav-link" href="/registration">
                      Registration
                    </a>
                  </li>

                  <li>
                    <a className="nav-link" href="/contact">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="top-bar__address">
                <ul className="contact-info">
                  <li>
                    <div className="__label">Address</div>

                    <p>Richardson, TX</p>
                  </li>

                  <li>
                    <div className="__label">Phone</div>

                    <p>
                      <a href="tel:214-901-7481">(214) 901-7481</a>
                    </p>
                  </li>

                  <li>
                    <div className="__label">Social</div>

                    <div className="s-btns s-btns--gray">
                      <ul className="d-flex flex-row flex-wrap align-items-center">
                        <li>
                          <a className="f" href="#">
                            <i className="fontello-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a className="t" href="#">
                            <i className="fontello-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a className="y" href="#">
                            <i className="fontello-youtube-play"></i>
                          </a>
                        </li>
                        <li>
                          <a className="i" href="#">
                            <i className="fontello-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="top-bar__action">
                <div className="d-sm-table">
                  {/* <div className="d-sm-table-cell align-middle">
                                <a className="top-bar__cart-btn" href="#">
                                    <i className="cart-ico fontello-shopping-cart"><span className="total">1</span></i>
                                </a>
                            </div> */}

                  <div className="d-sm-table-cell align-middle">
                    <a className="custom-btn" href="/registration">
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div id="side-menu" className="side-menu  d-none">
        <div className="side-menu__inner">
          <ul className="side-menu__menu">
            <li className="active">
              <a href="/registration">Registration</a>
            </li>
            <li>
              <a href="/#packages">Packages</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>

          <div className="side-menu__contacts">
            <ul className="contact-info">
              <li>
                <div className="__label">Address</div>

                <p>Richardson, TX</p>
              </li>

              <li>
                <div className="__label">Phone</div>

                <p>
                  <a href="tel:214-901-7481">(214) 901-7481</a>
                </p>
              </li>

              <li>
                <div className="__label">Social</div>

                <div className="s-btns s-btns--gray">
                  <ul className="d-flex flex-row flex-wrap align-items-center">
                    <li>
                      <a className="f" href="#">
                        <i className="fontello-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a className="t" href="#">
                        <i className="fontello-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a className="y" href="#">
                        <i className="fontello-youtube-play"></i>
                      </a>
                    </li>
                    <li>
                      <a className="i" href="#">
                        <i className="fontello-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <a
              className="custom-btn custom-btn--big custom-btn--s2 wide"
              href="#"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
