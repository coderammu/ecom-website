import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./component/Banner";
import Header from "./component/Header";
import Navigation from "./component/Navigation";
import Home from "./pages/Home";
import LivingRoom from "./pages/LivingRoom";

import "./assets/css/App.css";
import BedRoom from "./pages/BedRoom";
import DiningRoom from "./pages/DinningRoom";
import Entertainment from "./pages/Entertainment";
// import HomeOffice from "./pages/HomeOffice";
import Matress from "./pages/Mattress";
import HomeOffice from "./pages/HomeOffice";
import AllProductList from "./pages/ProductList";
import About from "./pages/About";
import { createContext, useState } from "react";
import Cart from "./pages/Cart";
import WhishList from "./pages/WhishList";
import Footer from "./component/Footer";

export const ProductContext = createContext();

function App() {
  const [products, setProducts] = useState({
    cart: [],
    wishList: [],
  });

  const contextValues = { products, setProducts };

  return (
    <ProductContext.Provider value={contextValues}>
      <div className="App">
        <BrowserRouter>
          <header className="w-full relative z-1 bg-white">
            <Banner />
            <Header />
            <Navigation />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/living-room" element={<LivingRoom />} />
              <Route path="/bed-room" element={<BedRoom />} />
              <Route path="/dining-room" element={<DiningRoom />} />
              <Route path="/entertainment" element={<Entertainment />} />
              <Route path="/home-office" element={<HomeOffice />} />
              <Route path="/matress" element={<Matress />} />
              <Route path="/products" element={<AllProductList />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wish-list" element={<WhishList />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </ProductContext.Provider>
  );
}

export default App;
