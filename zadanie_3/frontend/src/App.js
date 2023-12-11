
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen"

function App() {
  return (
    <BrowserRouter>
      <div>

        <header className="App-header">
          <Link to="/">shop</Link>
        </header>

        <main>

          <Routes>
            <Route path="/" element={<HomeScreen />}/>
            <Route path="/product/:id" element={<ProductScreen />}/>
            
          </Routes>


        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
