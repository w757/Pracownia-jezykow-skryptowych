import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";
import { Row, Col, Container } from "react-bootstrap";



function CategoryScreen () {
  //  const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const params = useParams();
  const { category } = params;

  const [products, setProducts] = useState([]);
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get(`/api/category/${category}`);
          setProducts(response.data);
          setError('');
        } catch (err) {
          setError(err.message); //Products Not Found in this Category
        } finally {
          setLoading(false);
        }
      };
  
      fetchProducts();
    }, [category]);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  
    return (
      <div>
 <h2>{category}:</h2>
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
