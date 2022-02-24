import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>;
  return <section className="container py-4">
      <div className="row justify-content-center">
          <div className="col-12">
              <h4>Cart ({totalUniqueItems}) Total items: {totalItems} </h4>
              <table className="table table-light table-hover m-0">
                  <tbody>
                  {items.map((item, index) => {
                     return (
                        <tr key={index}>
                        <td>
                            <img src={item.img} alt="" style={{height: '6rem'}}/>
                        </td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>Quantity: ({item.quantity})</td>
                        <td>
                            <button className="btn btn-info ms-2" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                            <button className="btn btn-info ms-2" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                            <button className="btn btn-danger ms-2" onClick={() => removeItem(item.id)}>Remove item</button>
                        </td>
                    </tr>
                     )
                  })}
                  </tbody>
              </table>
          </div>
          <div className="col-auto mt-2 ms-auto">
              <h2>Total price: $ {cartTotal}</h2>
          </div>
          <div className="col-auto mt-2">
              <button className="btn btn-danger" onClick={() => emptyCart()}>Clear cart</button>
          </div>
          <div className="col-auto">
              <button className="btn btn-primary ms-2 mt-2">Buy Now</button>
          </div>
      </div>
  </section>;
};

export default Cart;
