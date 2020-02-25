import React from 'react';
import {
  Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input,
} from 'reactstrap';
import {
  Button, Icon,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

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
      tagsState: product.tags,
      modal: false,
      newTag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handlerRemoveProduct = this.handlerRemoveProduct.bind(this);
    this.handleAddTag = this.handleAddTag.bind(this);
    this.handleRemoveTag = this.handleRemoveTag.bind(this);
  }

  handleAddTag(tag) {
    const { tagsState } = this.state;
    const newTags = tagsState;
    newTags.push(tag);
    this.setState({
      tagsState: newTags,
      newTag: '',
      stateUpdate: String(Math.floor(Math.random() * (200 - 20)) + 200),
    });
  }

  handleRemoveTag(id) {
    const { tagsState } = this.state;
    const newTags = tagsState;
    newTags.splice(id, 1);
    this.setState({
      tagsState: newTags,
    });
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
      tagsState: product.tags,
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
      removeProduct, id, setPageCount, products, currentPage, setCurrentPage,
    } = this.props;
    removeProduct(id);
    const indexOfLastProduct = currentPage * 9;
    const indexOfFirstProduct = indexOfLastProduct - 9;
    if (
      products.slice(indexOfFirstProduct, indexOfLastProduct).length === 1
      && products.length > 0
    ) {
      setCurrentPage(currentPage - 1);
    }
    setPageCount(products.length);
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
      tagsState,
      newTag,
      stateUpdate,
    } = this.state;
    const {
      className,
    } = this.props;
    const handleChangeProduct = () => {
      const { changeProduct } = this.props;
      const newProduct = {
        id: idState,
        title: titleState,
        description: descriptionState,
        price: priceState,
        picture: pictureState,
        mark: markState,
        tags: tagsState,
        update: stateUpdate,
      };
      changeProduct(idState, newProduct);
      this.toggle();
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
                  {tagsState.map((tag, i) => (
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
            <Button color="white" onClick={handleChangeProduct} block>
              SAVE
            </Button>
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
  currentPage: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  product: PropTypes.shape.isRequired,
  setPageCount: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  products: PropTypes.shape.isRequired,
  changeProduct: PropTypes.shape.isRequired,
};

export default ModalComponent;
