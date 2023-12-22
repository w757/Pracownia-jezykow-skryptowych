import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";

function CategoryScreen() {
  const [error, setError] = useState("");
  const params = useParams();
  const { category } = params;

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`/api/category/${category}`);
        setProducts(response.data);
      } catch (err) {
        if (err.response && err.response.status === 404) {
          setError("Category not found");
        } else {
          setError("Page not found");
        }
      }
    };

    fetchProducts();
  }, [category]);

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <h1>{category}:</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
            <Product product={product}></Product>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CategoryScreen;
