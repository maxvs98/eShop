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
      idState: product.id,
      titleState: product.title,
      descriptionState: product.description,
      priceState: product.price,
      pictureState: product.picture,
      markState: product.mark,
      modal: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handlerRemoveProduct = this.handlerRemoveProduct.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
    const { product } = this.props;
    this.setState({
      idState: product.id,
      titleState: product.title,
      descriptionState: product.description,
      priceState: product.price,
      pictureState: product.picture,
      markState: product.mark,
    });
  }

  handleChange(event) {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  }

  handlerRemoveProduct() {
    const {
      removeProduct, id,
    } = this.props;
    removeProduct(id);
  }

  render() {
    const {
      modal,
      idState,
      titleState,
      descriptionState,
      priceState,
      pictureState,
      markState,
    } = this.state;
    const {
      className,
    } = this.props;

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
              onClick={() => this.handlerRemoveProduct()}
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
                  name="titleState"
                  placeholder="title"
                  onChange={this.handleChange}
                  defaultValue={titleState}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="descriptionState"
                  placeholder="description"
                  onChange={this.handleChange}
                  defaultValue={descriptionState}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="priceState"
                  placeholder="price"
                  onChange={this.handleChange}
                  defaultValue={priceState}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="pictureState"
                  placeholder="picture"
                  onChange={this.handleChange}
                  defaultValue={pictureState}
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
                id={idState}
                title={titleState}
                description={descriptionState}
                price={priceState}
                picture={pictureState}
                mark={markState}
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
