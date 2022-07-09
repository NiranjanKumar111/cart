import React from 'react';

const CartItem=(props)=>{
  
      const { price, title, qty } = props.product;
      const {product, onIncreaseQuantity, onDecreaseQuantity, onDeleteQuantity } = props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} src={product.img} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/1828/1828925.png"
              onClick={()=> onIncreaseQuantity(product)}
            />
            <img
              alt="decrease"
              className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
             onClick={()=> onDecreaseQuantity(product)}

            />
            <img
              alt="delete"
              className="action-icons"
            src="https://cdn-icons.flaticon.com/png/512/3405/premium/3405244.png?token=exp=1656886023~hmac=9dcf6d40eacd739b755e4ef9a3d9b067"
            onClick={()=>onDeleteQuantity(product.id)}
            />
          </div>
        </div>
      </div>
    );
  }


const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;