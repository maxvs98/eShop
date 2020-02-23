import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Statistic } from 'semantic-ui-react';
import Star from './Star/StarComponent';

class Rating extends Component {
  constructor(props) {
    super(props);
    const {
      product, id,
    } = this.props;
    const number = product.mark.map((e) => e.id).indexOf(id);
    const value = (number === -1 ? 0 : product.mark[number].value);
    this.state = {
      dynamicValue: value,
      value,
    };
    this.colors = {
      1: '#f44336',
      2: '#FF5722',
      3: '#FF9800',
      4: '#FFC107',
      5: '#FFEB3B',
      6: 'green',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleClick(newValue) {
    const {
      product, changeProduct, id,
    } = this.props;
    const { value } = this.state;
    if (value === newValue) {
      this.setState({
        value: 0,
        dynamicValue: 0,
      });
    } else {
      this.setState({
        value: newValue,
        dynamicValue: newValue,
      });
    }
    const {
      title,
      description,
      price,
      picture,
      tags,
    } = product;
    const productId = product.id;
    const number = product.mark.map((e) => e.id).indexOf(id);
    /* eslint-disable */

    let { mark } = product;
    if (value !== newValue) {
      if (number !== -1) {
        mark[number] = { id, value: newValue };
      } else {
        mark.push({ id, value: newValue });
      }
    } else {
      mark = mark.filter((o) => o.id !== id);
    }
    const newProduct = {
      id: productId,
      title,
      description,
      price,
      picture,
      tags,
      mark,
    };
    changeProduct(productId, newProduct);
  }

  handleDelete() {
    const { addMark, product } = this.props;
    this.setState({
      value: 0,
      dynamicValue: 0,
    });
    addMark(product, 0);
  }

  handleMouseEnter(newValue) {
    this.setState({ dynamicValue: newValue });
  }

  handleMouseLeave() {
    const { value } = this.state;
    this.setState({ dynamicValue: value });
  }

  render() {
    const { product } = this.props;
    const { mark } = product;
    const { dynamicValue } = this.state;
    const starSpans = [];
    let count = 0;
    for (let v = 1; v <= 5; v += 1) {
      if (v <= dynamicValue) {
        count += 1;
      }
    }
    for (let v = 1; v <= 5; v += 1) {
      starSpans.push(
        <Star
          key={v}
          color={this.colors[count]}
          isFilled={v <= dynamicValue}
          value={v}
          handleHover={this.handleMouseEnter}
          handleHoverLeave={this.handleMouseLeave}
          handleClick={this.handleClick}
          handleDelete={this.handleDelete}
        />,
      );
    }
    return (
      <div>
        {starSpans}
        <Statistic size="tiny">
          <Statistic.Value>
            {mark.length
              ? (mark.reduce((sum, current) => sum + current.value, 0) / mark.length).toFixed(1) : '0.0'}
          </Statistic.Value>
        </Statistic>
      </div>
    );
  }
}

Rating.propTypes = {
  changeProduct: PropTypes.shape.isRequired,
  product: PropTypes.shape.isRequired,
  addMark: PropTypes.func.isRequired,
  stars: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default Rating;
