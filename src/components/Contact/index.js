import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { compose } from 'redux';
import styles from './styles';

class Contact extends Component {
  render() {

    return <h1>Contact</h1>;
  }
}




export default compose(
  withStyles(styles),
)(Contact);
