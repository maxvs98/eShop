import React from 'react';
import {
  Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input,
} from 'reactstrap';
import {
  Button,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import SubmitButton from './SubmitButton/SubmitButtonContainer';

class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    const { product } = this.props;
    this.state = {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      picture: product.picture,
      modal: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  }

  handleChange(event) {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      removeProduct,
    } = this.props;
    const {
      id,
      title,
      description,
      price,
      picture,
      modal,
    } = this.state;
    const { className } = this.props;
    /* const product = {
      id,
      title,
      description,
      price,
      picture,
      tags: null,
      rating: null,
    }; */
    /* const handlerChangeProduct = () => {
      const { changeProduct } = this.props;
      changeProduct(id, product);
      this.toggle();
    }; */
    const handlerRemoveProduct = () => {
      removeProduct(id);
    };
    return (
      <div>
        <div className="product__buttons">
          <Button.Group>
            <Button
              icon="pencil alternate"
              floated="right"
              color="grey"
              size="small"
              onClick={this.toggle}
              basic
            />
            <Button
              icon="delete"
              floated="right"
              color="grey"
              size="small"
              onClick={handlerRemoveProduct}
              basic
            />
          </Button.Group>
        </div>
        <Modal
          isOpen={modal}
          toggle={this.toggle}
          className={className}
        >
          <ModalHeader toggle={this.toggle}>EDIT PRODUCT</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Input
                  type="text"
                  name="title"
                  placeholder="title"
                  onChange={this.handleChange}
                  defaultValue={title}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="description"
                  placeholder="description"
                  onChange={this.handleChange}
                  defaultValue={description}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="price"
                  placeholder="price"
                  onChange={this.handleChange}
                  defaultValue={price}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="picture"
                  placeholder="picture"
                  onChange={this.handleChange}
                  defaultValue={picture}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            {/* eslint-disable */}
            <a
              onClick={this.toggle}
            >
            {/* eslint-enable */}
              <SubmitButton
                onClick={this.toggle}
                id={id}
                title={title}
                description={description}
                price={price}
                picture={picture}
              />
            </a>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

ModalComponent.propTypes = {
  className: PropTypes.string.isRequired,
  removeProduct: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  product: PropTypes.shape.isRequired,
};

export default ModalComponent;
