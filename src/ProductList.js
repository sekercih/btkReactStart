import React, { Component } from 'react';
import "./index.css";

export default class ProductList extends Component {
 render() {
  return (
   <div>
    <h3>{this.props.title}</h3>
   </div>
  )
 }
}
