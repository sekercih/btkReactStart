import React, { Component } from "react";

import { ListGroup, ListGroupItem } from "reactstrap";
import "./index.css";

class CatagoriyList extends Component {
  state = {
    categories: []
  };
  componentDidMount(){
    this.getCategories();
  }

getCategories=()=>{
  fetch("http://localhost:3000/categories").then(response=>response.json()).
  then(data=>this.setState({categories:data}));
}


  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <div className="List">
          <ListGroup>
            {this.state.categories.map((category) => (
              <ListGroupItem
                onClick={() => this.changeCategory(category)}
                key={category.id}
              
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
