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
                разобраться во всех тонкостях
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="container-fluid">
      <div className="devider" />
    </div>
    <section className="about clearfix">
      <div className="container clearfix">
        <div className="about-header">
          о нас
        </div>
        <div className="background">
          <div className="about__title">
            бэкграунд
          </div>
          <div className="background__content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis.
          </div>
          <div className="background__content">
            Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
          </div>
          <div className="background__content">
            Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa quiis aute irure dolor
            in reprehenderit in is aute irure dolor in reprehenderit in is aute irure dolor in
            reprehenderit in.
          </div>
        </div>
        <div className="right-block">
          <div className="merit clearfix">
            <div className="about__title">
              Заслуги
            </div>
            <div className="rhombuses clearfix">
              <div className="rhombuses__item">
                <div className="rhombus">
                  75
                </div>
                <div className="signature">
                  Реализованных проектов
                </div>
              </div>
              <div className="rhombuses__item">
                <div className="rhombus">
                  154
                </div>
                <div className="signature">
                  Положительных отзыва
                </div>
              </div>
              <div className="rhombuses__item">
                <div className="rhombus">
                  8
                </div>
                <div className="signature">
                  Лет
                  <br />
                  опыта
                </div>
              </div>
            </div>
          </div>
          <div className="contact clearfix">
            <div className="about__title">
              Связь
            </div>
            <div className="contact__items">
              <div className="contact__item">
                skype.com/myname
              </div>
              <div className="contact__item">
                vk.com/12343
              </div>
              <div className="contact__item">
                info@sitename.ru
              </div>
            </div>
            <div className="contact__block">
              <div className="contact__img" />
              <div className="contact__subscript">
                Не стесняйтесь, пишите
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
