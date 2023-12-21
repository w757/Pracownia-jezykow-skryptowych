import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const featchData = async () => {
      const result = await axios.get("/api/products/");
      setProducts(result.data);
    };
    featchData();
  }, []);

  return (
    <Row>
      {products.map((product) => (
        <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
          <Product product={product}></Product>
        </Col>
      ))}
    </Row>
  );
}

export default HomeScreen;
