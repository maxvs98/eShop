import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard/ProductCardContainer';
import Modal from '../Modal/ModalContainer';

class CardsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      productsPerPage: 8,
    };
  }

  componentDidMount() {
    const { isLoaded } = this.props;
    if (!isLoaded) {
      const { loadData } = this.props;
      loadData();
    }
  }

  handleClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id),
    });
    document.documentElement.scrollTop = 0;
  };

  handleClickPrev = () => {
    let { currentPage } = this.state;
    if (currentPage - 1 > 0) {
      currentPage -= 1;
      this.setState({
        currentPage,
      });
    }
    document.documentElement.scrollTop = 0;
  };

  handleClickNext = () => {
    const { products } = this.props;
    const { productsPerPage } = this.state;
    let { currentPage } = this.state;
    const count = Math.ceil(products.length / productsPerPage);
    if (currentPage + 1 <= (count === 0 ? 1 : count)) {
      currentPage += 1;
      this.setState({
        currentPage,
      });
    }
    document.documentElement.scrollTop = 0;
  };

  render() {
    const { products, isReady, role } = this.props;
    const { currentPage, productsPerPage } = this.state;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const pageNumbers = [];
    if (isReady) {
      for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i += 1) {
        pageNumbers.push(i);
      }
    }
    /* eslint-disable */
    const renderPageNumbers = pageNumbers.map((number) => (
      currentPage !== number
      ? <div className="page-number" key={number} id={number} onClick={this.handleClick}>
        {number}
      </div>
      : <div className="page-number number-selected" key={number} id={number} onClick={this.handleClick}>
        {number}
      </div>
    ));
    /* eslint-enable */
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="main-content__goods clearfix">
              {role !== 'admin'
                ? ''
                : (
                  <Modal
                    onReceive={this.onReceiveState}
                    buttonLabel="ADD PRODUCT"
                    products={products}
                  />
                )}
              <Card.Group itemsPerRow={4}>
                {/* eslint-disable */
                  !isReady
                  ? 'загрузка'
                  : (products.length
                  ? products.slice(indexOfFirstProduct, indexOfLastProduct).map((product) => (
                    <ProductCard key={product.id} {...product} />
                  )) : (<div className="no-goods">no goods</div>))
                /* eslint-enable */}
              </Card.Group>
            </div>
          </div>
        </div>

        {!isReady
          ? ''
          : (
            <div className="pages">
              <div className="pages__center-block clearfix">
                <div className="row">
                  <div className="col-md-1">
                    {/* eslint-disable */}
                    <div className="prev-icon" onClick={this.handleClickPrev} />
                    {/* eslint-enable */}
                  </div>
                  <div className="col-md-10">
                    <div className="page-numbers d-flex justify-content-center">
                      {renderPageNumbers}
                    </div>
                  </div>
                  <div className="col-md-1">
                    {/* eslint-disable */}
                    <div className="next-icon" onClick={this.handleClickNext} />
                    {/* eslint-enable */}
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
    );
  }
}

CardsComponent.propTypes = {
  loadData: PropTypes.func.isRequired,
  products: PropTypes.shape.isRequired,
  isReady: PropTypes.bool.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  role: PropTypes.string.isRequired,
};

export default CardsComponent;
