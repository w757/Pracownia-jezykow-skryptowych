import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";
import { Row, Col, Container } from "react-bootstrap";

const ProductScreen = () => {
  const { _id } = useParams(); // Pobieranie ID produktu z URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${_id}`);
        setProduct(response.data);
      } catch (err) {
        if (err.response && err.response.status === 404) {
          setError('Product not found');
        } else {
          setError('Page not found');
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
  
        <Product product={product}></Product>

  </Row>
  );
};

export default ProductScreen;


// function ProductScreen() {
//   const params = useParams();
//   const { id } = params;

//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     const featchData = async () => {
//       const result = await axios.get(`/api/products/id/${id}`);
//       setProducts(result.data);
//     };
//     featchData();
//   }, [id]);

//   return (
//     //<div>{products.id}</div>

//     <Container>
//       <Product product={products}></Product>
//     </Container>
//   );
// }

// export default ProductScreen;
