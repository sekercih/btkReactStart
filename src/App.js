import React from "react";
import Navi from "./Navi";
import CatagoriyList from "./CatagoriyList";
import ProductList from "./ProductList";


import { Container, Row, Col } from "reactstrap";
import Footer from "./Footer";
function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            
            <CatagoriyList title="Kategoriler" />
          </Col>

          <Col xs="9">
            <ProductList title="Ürün Listesi"  />
          </Col>
        </Row>
        <Footer/>
      </Container>
      
    </div>
  );
}
export default App;
