import "../../css/products/products.css";
const Products = ({ products }) => {
  console.log(products);
  return (
    <div className='products'>
      {products.map((product) => (
        <div key={product.id} className='product'>
          <div className='image'>
            <img src={product.imageUrl} alt='product image' />
          </div>
          <div className='info'>
            <p>{product.name}</p>
            <span>${product.price}</span>
          </div>
          <button>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
