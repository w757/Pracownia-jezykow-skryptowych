import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import { LinkContainer } from "react-router-bootstrap";

function Product(props) {
  const { product } = props;
  return (
    <Card className="product-card">
      <Link to={`/product/${product._id}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <LinkContainer to={`/product/${product._id}`}>
          <Card.Title className="product-name">{product.name}</Card.Title>
        </LinkContainer>
        <Card.Text>${product.price}</Card.Text>
        <Button>Add to cart</Button>
      </Card.Body>
    </Card>
  );
}
export default Product;
