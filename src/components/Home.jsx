import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Footer from './Footer';
import Menu from '../containers/Menu';
import { Icon } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <div>
        <div class="header__content">
          <Menu />
        </div>
        <section id="head">
          <div class="title">
      			<div class="container">
      				<div class="row">
      					<div class="col-md-12 col-lg-12">
      						<div class="title__text_small">Simple</div>
      						<div class="title__text_large">eShop</div>
      						<div class="title__arrow">
      							<a href="#">
      								<div>
      									  <Icon name='angle down' inverted color='grey'  size='large'/>
      								</div>
      							</a>
      						</div>
      					</div>
      				</div>
      			</div>
      		</div>
        </section>
        <section id="advantages">
      		<div class="container">
      			<div class="row">
      				<div class="col-md-12 col-lg-12">
      					<div class="advantages__title">
      						НАШИ ПРЕИМУЩЕСТВА
      					</div>
      				</div>
      				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
      					<div class="advantage">
      						<div class="advantage__image_hand">
      						</div>
      						<div class="advantage__title">НАДЕЖНОСТЬ</div>
      						<div class="advantage__text">
      							Мы всегда придем к вам на помощь в решении самых неоднозначных вопросов
      						</div>
      					</div>
      				</div>
      				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
      					<div class="advantage">
      						<div class="advantage__image_property">
      						</div>
      						<div class="advantage__title">ДОСТОВЕРНОСТЬ</div>
      						<div class="advantage__text">
      							Достоверность - главный принцип нашей работы
      						</div>
      					</div>
      				</div>
      				<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
      					<div class="advantage">
      						<div class="advantage__image_conference">
      						</div>
      						<div class="advantage__title">КОМПЕТЕНТНОСТЬ</div>
      						<div class="advantage__text">
      							Наши специалисты с большим опытом работы помогут разобраться во всех юридических тонкостях
      						</div>
      					</div>
      				</div>
      			</div>
      		</div>
      	</section>
        <Footer />
      </div>
    );
  }
}

export default Home;
