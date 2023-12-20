import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { Container, Navbar } from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"
import NavbarComponent from "./components/NavbarComponent";
import CompanyScreen from "./screens/LogInScreen"
import AboutUSScreen from "./screens/AboutUsScreen"
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap";
import LogInScreen from "./screens/LogInScreen"
import CategoryScreen from "./screens/CategoryScreen";
function App() {
  //const { state } = useContext(Store);
  //const { cart } = state;
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header className="App-header">
         <NavbarComponent></NavbarComponent>
        </header>

        <main>
         <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/category/:category" element={<CategoryScreen />} />
            <Route path="/about-us" element={<AboutUSScreen/>} />
            <Route path="/log-in" element={<LogInScreen/>} />
            
          </Routes>
          </Container>

          {/* <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
              </Nav> */}

        </main>
        <footer>
          <div className="text-center">
            djsljdsklf
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
