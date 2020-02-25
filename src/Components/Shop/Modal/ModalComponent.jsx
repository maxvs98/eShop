import React from 'react';
import {
  Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input,
} from 'reactstrap';
import { Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      price: '',
      picture: '',
      newTag: '',
      tags: [],
      modal: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleAddTag = this.handleAddTag.bind(this);
    this.handleRemoveTag = this.handleRemoveTag.bind(this);
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

  handleAddTag(tag) {
    const { tags } = this.state;
    const newTags = tags;
    newTags.push(tag);
    this.setState({
      tags: newTags,
      newTag: '',
    });
  }

  handleRemoveTag(id) {
    const { tags } = this.state;
    const newTags = tags;
    newTags.splice(id, 1);
    this.setState({
      tags: newTags,
    });
  }

  render() {
    const {
      title, description, price, picture, modal, value, tags, newTag,
    } = this.state;
    const { className } = this.props;
    const product = {
      id: Math.floor(Math.random() * (200 - 20)) + 200,
      title,
      description,
      price,
      picture,
      tags,
      rating: null,
      mark: [],
    };
    const handlerAddProduct = () => {
      const { addProduct } = this.props;
      addProduct(product);
      this.toggle();
      this.setState({
        tags: [],
      });
    };
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col text-center modal__button">
              <Button circular basic onClick={this.toggle} size="lg">
                ADD PRODUCT
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
              <FormGroup>
                <Input
                  className="button__addTag"
                  type="text"
                  name="newTag"
                  placeholder="add new tag"
                  onChange={this.handleChange}
                  value={newTag}
                />
                <Button type="button" onClick={() => { this.handleAddTag(newTag); }}>
                  add
                </Button>
                <div className="product__tags">
                  {tags.map((tag, i) => (
                    <span className="product__tag">
                      #
                      {tag}
                      {/* eslint-disable */}
                      <Icon.Group className="modal__icon" size="large" key={i} onClick={() => { this.handleRemoveTag(i); }}>
                        <Icon corner="top left" name="delete" />
                      </Icon.Group>
                      {/* eslint-enable */}
                    </span>
                  ))}
                </div>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="white" onClick={handlerAddProduct} block>
              CONFIRM
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

ModalComponent.propTypes = {
  addProduct: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default ModalComponent;
