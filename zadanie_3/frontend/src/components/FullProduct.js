import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
function FullProduct(props) {
  const { product } = props;
  return (
    <Form>
      <Card className="product">
        <Card.Title className="product-name ">{product.name}</Card.Title>
        <img src={product.image} className="card-img-top" alt={product.name} />

        <Card.Body>
          <Card.Text>{product.category}</Card.Text>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>${product.price}</Card.Text>
          <Button>Add to cart</Button>
        </Card.Body>
      </Card>
    </Form>
  );
}

export default FullProduct;
