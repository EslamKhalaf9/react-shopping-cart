function Product({ product, openModal }) {
  return (
    <div className='product'>
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
      </div>
      <button>Add to cart</button>
    </div>
  );
}

export default Product;
