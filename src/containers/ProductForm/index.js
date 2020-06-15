import { Box, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import renderTextField from '../../components/FormHelper/TextField';
import * as modalActions from './../../actions/modal';
import * as productActions from './../../actions/product';
import styles from './styles';
import validate from './validate';

class ProductForm extends Component {
  handleSubmitForm = data => {
    const { productActionsCreators, productEditing } = this.props;
    const { addProduct, updateProduct } = productActionsCreators;
    const { name, description, price } = data;

    if(productEditing && productEditing.ID)
    {
      updateProduct(name, description, price)
    }else{
      addProduct(name, description, price);
    }
     
  };




  render() {
    const {
      classes,
      modalActionCreators,
      handleSubmit,
      invalid,
      submitting,
      productEditing,
    } = this.props;
    const { hideModal } = modalActionCreators;
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container>
          <Grid item md={12}>
            <Field
              id="name"
              label="Tên sản phẩm"
              className={classes.textField}
              margin="normal"
              name="name"
              component={renderTextField}
              value={productEditing ? productEditing.name : ''}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="description"
              label="Mô tả"
              multiline
              rowsMax="4"
              className={classes.textField}
              margin="normal"
              name="description"
              component={renderTextField}
              value={productEditing ? productEditing.description : ''}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="price"
              label="Giá"
              type="number"
              className={classes.textField}
              margin="normal"
              name="price"
              component={renderTextField}
              value={productEditing ? productEditing.price : ''}
            />
          </Grid>
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" mt={2}>
              <Box ml={1}>
                <Button variant="contained" onClick={hideModal}>
                  Hủy Bỏ
                </Button>
              </Box>
              <Button
                disabled={invalid || submitting}
                variant="contained"
                color="primary"
                type="submit"
              >
                Lưu Lại
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}



const mapStateToProps = state => {
  return {
    productEditing: state.product.productEditing,
    initialValues: {
      name: state.product.productEditing ? state.product.productEditing.name : null,
      description: state.product.productEditing
        ? state.product.productEditing.description
        : null,
        price: state.product.productEditing ? state.product.productEditing.price : null,
    },
  };
};

const mapDispatchToProps = dispatch => {
  return {
    modalActionCreators: bindActionCreators(modalActions, dispatch),
    productActionsCreators: bindActionCreators(productActions, dispatch),
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps, 
);

const FORM_NAME = 'PRODUCT_MANAGEMENT';

const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate,
});
 
export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
)(ProductForm);
