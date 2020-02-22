import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
} from 'semantic-ui-react';

class SubmitButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.handleChangeProduct = this.handleChangeProduct.bind(this);
  }

  handleChangeProduct() {
    const {
      id,
      title,
      description,
      price,
      picture,
      changeProduct,
      mark,
    } = this.props;
    const product = {
      id,
      title,
      description,
      price,
      picture,
      tags: null,
      mark,
    };
    changeProduct(id, product);
  }

  render() {
    return (
      <Button color="white" onClick={this.handleChangeProduct} fluid>
        SAVE
      </Button>
    );
  }
}

SubmitButtonComponent.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  changeProduct: PropTypes.func.isRequired,
  mark: PropTypes.shape.isRequired,
};

export default SubmitButtonComponent;
