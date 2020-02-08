import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';

const FooterComponent = () => {
  return (
    <section id="footer" class="footer">
      <div class="container">
              <div class="row">
                  <div class="col-md-3">
                      <div class="footer__logo">
                      </div>
                  </div>
                  <div class="col-md-7">
                      <div class="footer__menu clearfix">
                          <a href="#">
                              <div class="item">
                                      Home
                              </div>
                          </a>
                          <a href="#">
                              <div class="item">
                                      Shop
                              </div>
                          </a>
                          <a href="#">
                              <div class="item">
                                      Team
                              </div>
                          </a>
                          <a href="#">
                              <div class="item">
                                      About us
                              </div>
                          </a>
                          <a href="#">
                              <div class="item">
                                      Contacts
                              </div>
                          </a>
                      </div>
                  </div>
                  <div class="col-md-2">
                      <div class="social clearfix">
                          <a href="#">
                              <div class="social__icon_facebook">
                              </div>
                          </a>
                          <a href="#">
                              <div class="social__icon_twitter">
                              </div>
                          </a>
                          <a href="#">
                              <div class="social__icon_google">
                              </div>
                          </a>
                      </div>
                  </div>
              </div>
      </div>
     </section>
  );
};

export default FooterComponent;
