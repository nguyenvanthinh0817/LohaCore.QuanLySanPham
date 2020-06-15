import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { compose } from 'redux';
import styles from './styles';
import history from './../../containers/App/history';
class Home extends Component {
  onclick(){
    history.push('/products')
  }
  render() {
    return (<button onClick={this.onclick}>history</button>);
  }
}




export default compose(
  withStyles(styles),
)(Home);
