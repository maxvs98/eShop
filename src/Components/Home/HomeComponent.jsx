import React from 'react';
import { Icon } from 'semantic-ui-react';
import Footer from '../Footer/FooterComponent';
import Menu from '../Menu/MenuContainer';

const HomeComponent = () => (
  <div>
    <div className="header__content">
      <Menu />
    </div>
    <section id="head">
      <div className="title">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div className="title__text_small">Simple</div>
              <div className="title__text_large">eShop</div>
              <div className="title__arrow">
                <a href="/">
                  <div>
                    <Icon name="angle down" inverted color="grey" size="large" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="advantages">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <div className="advantages__title">
              НАШИ ПРЕИМУЩЕСТВА
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <div className="advantage">
              <div className="advantage__image_hand" />
              <div className="advantage__title">НАДЕЖНОСТЬ</div>
              <div className="advantage__text">
                Мы всегда придем к вам на помощь в решении самых неоднозначных вопросов
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <div className="advantage">
              <div className="advantage__image_property" />
              <div className="advantage__title">ДОСТОВЕРНОСТЬ</div>
              <div className="advantage__text">
                Достоверность - главный принцип нашей работы
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="advantage">
              <div className="advantage__image_conference" />
              <div className="advantage__title">КОМПЕТЕНТНОСТЬ</div>
              <div className="advantage__text">
                Наши специалисты с большим опытом работы помогут
                разобраться во всех юридических тонкостях
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default HomeComponent;
