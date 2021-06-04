import React, { Component } from "react";

import { ListGroup, ListGroupItem } from "reactstrap";
import "./index.css";
class CatagoriyList extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <div className="List">
          
          <ListGroup>
            <ListGroupItem tag="a" href="#">
              Bigisayar
            </ListGroupItem>
            <ListGroupItem tag="a" href="#">
              Cep Telefonu
            </ListGroupItem>
            <ListGroupItem tag="a" href="#">
              Beyez Eşya
            </ListGroupItem>
            <ListGroupItem tag="a" href="#">
              Küçük Ev Aletleri
            </ListGroupItem>
            <ListGroupItem tag="a" href="#">
              Aksesuar
            </ListGroupItem>
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default CatagoriyList;
