import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { reduxForm } from 'redux-form';
import * as modalActions from './../../actions/modal';
import * as productActions from './../../actions/product';
import ViewProductList from './../../components/ViewProductListForder/ViewProductList';
import styles from './styles';
import validate from './validate';


class ProductViewForm extends Component {


  render() {
    const {
      productView,
    } = this.props;
    return (
      // <div>/sdf</div>
      <ViewProductList listProduct={productView ? productView : []} />
    );
  }
}



const mapStateToProps = state => {
  return {
    productView: state.product.productView,

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
)(ProductViewForm);
