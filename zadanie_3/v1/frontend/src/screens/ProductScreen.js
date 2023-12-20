import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";
import { Row, Col, Container } from "react-bootstrap";

function ProductScreen() {
  const params = useParams();
  const { id } = params;

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const featchData = async () => {
      const result = await axios.get(`/api/products/id/${id}`);
      setProducts(result.data);
    };
    featchData();
  }, [id]);

  return (
    //<div>{products.id}</div>

    <Container>
      <Product product={products}></Product>
    </Container>
  );
}

export default ProductScreen;
