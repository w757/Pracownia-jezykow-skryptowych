import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { Container } from "react-bootstrap";
import NavbarComponent from "./components/NavbarComponent";
import AboutUSScreen from "./screens/AboutUsScreen";
import LogInScreen from "./screens/LogInScreen";
import CategoryScreen from "./screens/CategoryScreen";
import NotFoundScreen from "./screens/NotFoundScreen";
import FooterComponent from "./components/FooterComponent";

function App() {
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
              <Route path="/product/:_id" element={<ProductScreen />} />
              <Route path="/category/:category" element={<CategoryScreen />} />
              <Route path="/about-us" element={<AboutUSScreen />} />
              <Route path="/log-in" element={<LogInScreen />} />
              <Route element={<NotFoundScreen />} />
            </Routes>
          </Container>
        </main>

        <FooterComponent></FooterComponent>
      </div>
    </BrowserRouter>
  );
}

export default App;
