import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyNav from "./components/MyNav";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <MyNav />
        <div className="cont">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
