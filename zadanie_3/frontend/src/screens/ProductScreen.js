import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import FullProduct from "../components/FullProduct";
import { Row } from "react-bootstrap";

const ProductScreen = () => {
  const { _id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${_id}`);
        setProduct(response.data);
      } catch (err) {
        if (err.response && err.response.status === 404) {
          setError("Product not found");
        } else {
          setError("Page not found");
        }
      }
    };

    fetchProduct();
  }, [_id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Row>
      <FullProduct product={product}></FullProduct>
    </Row>
  );
};

export default ProductScreen;
