import { useState } from "react";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Products from "./components/products/Products";
import data from "./data.json";
import Filter from "./components/filter/Filter";

function App() {
  const [products] = useState(data);
  // useEffect(() => {
  //   setProducts(() => data);
  // }, []);
  return (
    <div className='layout'>
      <Header />
      <main>
        <div className='wrapper'>
          <Products products={products} />
          <Filter />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
