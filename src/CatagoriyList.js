import React, { Component } from "react";

import { ListGroup, ListGroupItem } from "reactstrap";
import "./index.css";

class CatagoriyList extends Component {
  state = {
    categories: [
      { categoryId: 1, categoryName: "Baverages" },
      { categoryId: 2, categoryName: "Condiments" },
    ],
  };
  currentCategory = "";
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <div className="List">
          <ListGroup>
            {this.state.categories.map((category) => (
              <ListGroupItem
                onClick={() => this.changeCategory(category)}
                key={category.categoryId}
                tag="a"
                href="#"
              >
                {category.categoryName}
              </ListGroupItem>
            ))}
          </ListGroup>
          <h4>{this.state.currentCategory}</h4>
        </div>
      </div>
    );
  }
}

export default CatagoriyList;
