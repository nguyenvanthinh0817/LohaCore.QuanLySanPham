import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { compose } from 'redux';
import styles from './styles';

class NotFound extends Component {
  render() {

    return <h1>404: Không tìm thấy trang</h1>;
  }
}




export default compose(
  withStyles(styles),
)(NotFound);
