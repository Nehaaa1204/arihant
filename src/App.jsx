import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArihantDoors from "./ArihantDoors";
import Home from "./Home";
import ProductPage from "./Productpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ArihantDoors is the shared layout: header + footer stay on every page */}
        <Route element={<ArihantDoors />}>
          <Route path="/" element={<Home />} />
          <Route path="/abs-doors" element={<ProductPage slug="abs" />} />
          <Route path="/frp-doors" element={<ProductPage slug="frp" />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;