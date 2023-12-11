import data from "../data";
import { Link } from "react-router-dom";
function HomeScreen() {
  return (
    <div>
      <h1>List of product</h1>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-description">
              <Link to={`/product/${product.id}`} className="product-name">
                <p>{product.name}</p>
              </Link>
              <p>{product.category}</p>
              <p>{product.price}</p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
