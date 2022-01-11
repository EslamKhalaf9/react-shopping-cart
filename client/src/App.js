import { useState, useEffect } from "react";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Products from "./components/products/Products";
import data from "./data.json";

function App() {
  const [products, setProducts] = useState(data);
  // useEffect(() => {
  //   setProducts(() => data);
  // }, []);
  return (
    <div className='layout'>
      <Header />
      <main>
        <div className='wrapper'>
          <Products products={products} />
          <div className='filter'>filter</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
