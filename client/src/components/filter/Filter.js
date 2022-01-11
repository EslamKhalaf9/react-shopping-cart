import "../../css/filter/filter.css";
const Filter = () => {
  return (
    <div className='filter'>
      <div className='filter-header'>Filter</div>
      <div className='filter-body'>
        <p>Number Of Products 4</p>
        <div className='filter-size'>
          <span>Filter</span>
          <select name='size'>
            <option value='All Size'>All</option>
            <option value='SM'>sm</option>
          </select>
        </div>
        <div className='order-by'>
          <span>Order By</span>
          <select name='order'>
            <option value='latest'>Latest</option>
            <option value='lowest'>Lowest</option>
            <option value='highest'>Highest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
