const SingleProduct = ({product, handleCart}) => {
    const {title, price, description, category, image} = product;
    return (
        <div>
            <div className='card'>
            <img className='card-img' src={image} alt="" />
            <h2 className='title'>{title}</h2>
            <p>{description}</p>
            <h3>Category: {category}</h3>
            <div className='card-footer'>
              <h2 className='price'>Price: {price}$</h2>
              <button onClick={() =>handleCart(product)} className='add-btn'>add to cart</button>
            </div>
          </div>
        </div>
    );
};

export default SingleProduct;