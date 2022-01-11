import { useState } from "react";
import Modal from "react-modal";
import "../../css/products/products.css";
import Product from "./Product";
const Products = ({ products }) => {
  const [product, setProduct] = useState("");
  const openModal = (product) => {
    setProduct(product);
  };
  return (
    <div className='products'>
      {products.map((product) => (
        <Product key={product.id} product={product} openModal={openModal} />
      ))}
      <Modal
        isOpen={product ? true : false}
        onRequestClose={() => setProduct("")}
        ariaHideApp={false}
      >
        <div className='product-modal'>
          <div className='image'>
            <img
              onClick={() => openModal(product)}
              src={product.imageUrl}
              alt={product.name}
            />
          </div>
          <div className='info'>
            <p>{product.name}</p>
            <span>${product.price}</span>
            <p>{product.desc}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Products;
