import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input,
} from 'reactstrap';
import PropTypes from 'prop-types';

class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      price: '',
      picture: '',
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
      title, description, price, picture, modal, value,
    } = this.state;
    const { buttonLabel, className } = this.props;
    const product = {
      id: Math.floor(Math.random() * (200 - 20)) + 200,
      title,
      description,
      price,
      picture,
      tags: null,
    };
    const handlerAddProduct = () => {
      const { addProduct } = this.props;
      addProduct(product);
      this.toggle();
    };
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <Button color="link" onClick={this.toggle} size="lg">
                {buttonLabel}
              </Button>
            </div>
          </div>
        </div>
        <Modal
          isOpen={modal}
          toggle={this.toggle}
          className={className}
        >
          <ModalHeader toggle={this.toggle}>ADD PRODUCT</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Input
                  type="text"
                  name="title"
                  placeholder="title"
                  onChange={this.handleChange}
                  value={value}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="description"
                  placeholder="description"
                  onChange={this.handleChange}
                  value={value}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="price"
                  placeholder="price"
                  onChange={this.handleChange}
                  value={value}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="picture"
                  placeholder="picture"
                  onChange={this.handleChange}
                  value={value}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handlerAddProduct} block>
              ADD
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

ModalComponent.propTypes = {
  addProduct: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default ModalComponent;
