import React, { Component } from 'react';
import history from './../App/history';
export default class AdminHomePage extends Component {
  onclick(){
    history.push('/products')
  }
  render() {
    return (
      <div>
        <h1>Admin Home Page works!</h1>
        <button onClick={this.onclick}>Product</button>
      </div>
    );
  } 
}
