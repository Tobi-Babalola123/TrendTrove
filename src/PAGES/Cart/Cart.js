import React, { useState } from "react";
import SingleBanner from "../../COMPONENTS/Banners/SingleBanner";
import Footer1 from "../../COMPONENTS/Footer/Footer1";
import Footer2 from "../../COMPONENTS/Footer/Footer2";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import "./Cart.css";
import "./Progress.css";
import "./CartContainer.css";
import "./ShippingContainer.css";
import "./PaymentContainer.css";
import "./OrderSucessfull.css";
import { useRecoilState } from "recoil";
import { orderSuccessfulProvider } from "../../Providers/OrderSuccessfulProvider";
import OrderSuccessful from "../../COMPONENTS/Order/OrderSuccessful";
const Cart = () => {
  const [cartdata, setcartdata] = React.useState([]);
  const [subtotal, setsubtotal] = React.useState(0);
  const [shipping, setshipping] = React.useState(0);
  const [active, setactive] = React.useState(1);
  const [tax, settax] = React.useState(0);
  const [deliverydate, setdeliverydate] = React.useState(
    new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0]
  );

  const getcartitemsfromlocalstorage = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      console.log(cart);
      setcartdata(cart);

      let tempsubtotal = 0;
      cart.forEach((item) => {
        tempsubtotal += item.productdata.SalesPrice * item.quantity;
      });
      // console.log(tempsubtotal)
      setsubtotal(tempsubtotal);
      setshipping(80);
      settax(tempsubtotal * 0.18 + 80 * 0.1);
      setreloadnavbar(!reloadnavbar);
    } else {
      console.log("Cart is empty");
      setreloadnavbar(!reloadnavbar);
    }
  };

  React.useEffect(() => {
    getcartitemsfromlocalstorage();
  }, []);

  const checklogin = () => {
    return true;
  };

  const [reloadnavbar, setreloadnavbar] = React.useState(false);
  const removeitemfromcart = (index) => {
    // alert(index)
    let temp = [...cartdata];
    temp.splice(index, 1);
    setcartdata(temp);
    localStorage.setItem("cart", JSON.stringify(temp));
    getcartitemsfromlocalstorage();
  };

  const savedaddress = [
    {
      AddressLine1: "Address Line 1",
      AddressLine2: "Address Line 2",
      AddressLine3: "Address Line 3",
      postalcode: "123456",
    },
    {
      AddressLine1: "Address Line 1",
      AddressLine2: "Address Line 2",
      AddressLine3: "Address Line 3",
      postalcode: "123456",
    },
  ];

  const [selectedorderid, setselectedorderid] = useState(0);
  const [ordersuccesscont, setordersuccesscont] = useRecoilState(
    orderSuccessfulProvider
  );
  return (
    <div>
      <Navbar reloadnavbar={reloadnavbar} />
      {ordersuccesscont && (
        <OrderSuccessful
          orderid={selectedorderid}
          message={`Order Placed Successfully, Order ID: ${selectedorderid}`}
          redirecto="userorders"
        />
      )}
      <SingleBanner
        heading="My Cart"
        bannerimage="https://i.ibb.co/MDvzQ7P/IMG-0134.jpg"
      />
      <div className="cart">
        <div className="progress">
          {active === 1 ? (
            <div
              className="c11"
              // onClick={() => {
              //   cartdata.length > 0 && checklogin() && setactive(1);
              // }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 filter-orange"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span>My Cart</span>
            </div>
          ) : (
            <div className="c1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 filter-orange"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span>My Cart</span>
            </div>
          )}

          {active === 2 ? (
            <div
              className="c11"
              // onClick={() => {
              //   cartdata.length > 0 && checklogin() && setactive(2);
              // }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 filter-orange"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>

              <span>Shipping</span>
            </div>
          ) : (
            <div className="c1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 filter-orange"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>

              <span>Shipping</span>
            </div>
          )}

          {active == 3 ? (
            <div className="c11">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 filter-orange"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>

              <span>Payment</span>
            </div>
          ) : (
            <div className="c1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 filter-orange"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>

              <span>Payment</span>
            </div>
          )}
          {active == 4 ? (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 filter-orange"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>

              <span>Success</span>
            </div>
          ) : (
            <div
              className="c1"
              onClick={() => {
                cartdata.length > 0 && checklogin() && setactive(4);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>

              <span>Success</span>
            </div>
          )}
        </div>

        {active == 1 && (
          <div className="cartcont">
            {/* <p>Cart cont</p> */}
            {cartdata.length > 0 ? (
              <table className="carttable">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartdata.map((item, index) => {
                    return (
                      <tr key={index} className="cartitemrow">
                        <td data-label="Product">
                          <div
                            className="cartproduct"
                            onClick={() => {
                              window.location.href = `/product/${item.productdata.ProductId}`;
                            }}
                          >
                            <img
                              src={item.productdata.ProductImage[0].image}
                              alt={item.productdata.ProductName}
                            />
                            <p>{item.productdata.ProductName}</p>
                          </div>
                        </td>

                        <td data-label="Quantity">
                          <div className="quantity">
                            <button
                              className="minus"
                              onClick={() => {
                                let newcartdata = [...cartdata];

                                if (newcartdata[index].quantity > 1) {
                                  newcartdata[index].quantity -= 1;
                                  setcartdata(newcartdata);
                                  localStorage.setItem(
                                    "cart",
                                    JSON.stringify(newcartdata)
                                  );
                                  getcartitemsfromlocalstorage();
                                }
                              }}
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              className="plus"
                              onClick={() => {
                                let newcartdata = [...cartdata];
                                newcartdata[index].quantity += 1;
                                setcartdata(newcartdata);
                                localStorage.setItem(
                                  "cart",
                                  JSON.stringify(newcartdata)
                                );
                                getcartitemsfromlocalstorage();
                              }}
                            >
                              +
                            </button>
                          </div>
                        </td>

                        <td data-label="Price">
                          <p>
                            N{" "}
                            {item.productdata.SalesPrice
                              ? item.productdata.SalesPrice.toFixed(2)
                              : 0.0}
                          </p>
                        </td>

                        <td>
                          <p>
                            N{" "}
                            {(
                              item.productdata.SalesPrice * item.quantity
                            ).toFixed(2)}
                          </p>
                        </td>

                        <td data-label="Remove">
                          <div
                            className="delbtn"
                            onClick={() => {
                              removeitemfromcart(index);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6 filter-orange"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                        </td>
                      </tr>
                    );
                  })}

                  <tr>
                    <td></td>
                    <td></td>
                    <td className="totaltableleft">Sub-Total</td>
                    <td className="totaltableright">N {subtotal.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td className="totaltableleft">Shipping</td>
                    <td className="totaltableright">N {shipping.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td className="totaltableleft">Total</td>
                    <td className="totaltableright">
                      N {(subtotal + shipping).toFixed(2)}
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td className="totaltableleft">Tax</td>
                    <td className="totaltableright">N {tax.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td className="totaltableleft">Net-Total</td>
                    <td className="totaltableright">
                      N {(tax + subtotal + shipping).toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <div className="emptycart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>

                <p>Your cart is empty</p>
              </div>
            )}
          </div>
        )}

        {active == 2 && (
          <div className="shippingcont">
            <div className="selectdate">
              <h2 className="mainhead1">Select Delivery Date</h2>
              <input
                min={
                  new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000)
                    .toISOString()
                    .split("T")[0]
                }
                type="date"
                value={deliverydate}
                onChange={(e) => {
                  setdeliverydate(e.target.value);
                }}
              />
            </div>
            <div className="previous">
              <h2 className="mainhead1">Previous Saved Address</h2>
              {savedaddress.length > 0 ? (
                savedaddress.map((item, index) => {
                  return (
                    <div className="radio" key={index}>
                      <input type="radio" name="address" id={index} />
                      <span>11, Adenike jones, ikeja lagos, Nigeria.</span>
                    </div>
                  );
                })
              ) : (
                <div className="emptyaddress">
                  <h2 className="mainhead1">Previous Saved Address</h2>
                </div>
              )}
              <div>
                <h2 className="mainhead1">Shipping Method</h2>
                <p className="shipping-info">Express shipping</p>
              </div>
            </div>
            <h3>OR</h3>
            <div className="shippingadd">
              <input type="text" placeholder="Address Line 1" />
              <input type="text" placeholder="Address Line 2" />
              <input type="number" placeholder="Phone number" />
              <input type="text" placeholder="Postal Code" />
              <button>Save</button>
            </div>
          </div>
        )}
        {active == 3 && (
          <div className="paymentcont">
            <h2 className="mainhead1">Select Payment Method</h2>
            <div className="paymenttypes">
              <div className="c1">
                <input type="radio" name="payment" id="payment1" />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCZB-q8Fn6LrTJrFDZQzZ4JrysTgCA7QIN2wQ0XgsScEaw-WlbCmy0hpLKlfODE5TpQio&usqp=CAU"
                  alt="paypal"
                />
              </div>
              <div className="c1">
                <input type="radio" name="payment" id="payment1" />
                <img
                  src="data:image/png;base64,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"
                  alt="paypal"
                />
              </div>
              <div className="c1">
                <input type="radio" name="payment" id="payment1" />
                <img
                  src="data:image/png;base64,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"
                  alt="paypal"
                />
              </div>
            </div>

            <div className="paymentagreement">
              <input type="checkbox" name="agreement" id="agreement" />
              <label htmlFor="agreement">
                I agree to the terms and conditions
              </label>
            </div>

            <div className="c2">
              <span>Net Total</span>
              &nbsp;&nbsp;
              <span>$ {(subtotal + tax + shipping).toFixed(2)}</span>
            </div>
          </div>
        )}
        {active == 4 && (
          <div className="ordersuccessfull">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 filter-orange"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>

            <h2 className="mainhead1">Order Placed Successfully</h2>
            <p>Thank you for shopping with us</p>
            <span>Order ID : 12345</span>
          </div>
        )}

        {/* CART BUTTONS */}
        {active == 1 && cartdata.length > 0 && (
          <div className="btns">
            <button
              className="nextbtn"
              onClick={() => {
                checklogin() && setactive(2);
              }}
            >
              Next
            </button>
          </div>
        )}

        {active == 2 && (
          <div className="btns">
            <button
              className="backbtn"
              onClick={() => {
                checklogin() && setactive(1);
              }}
            >
              Back
            </button>
            <button
              className="nextbtn"
              onClick={() => {
                checklogin() && setactive(3);
              }}
            >
              Next
            </button>
          </div>
        )}

        {active == 3 && (
          <div className="btns">
            <button
              className="backbtn"
              onClick={() => {
                checklogin() && setactive(2);
              }}
            >
              Back
            </button>
            <button
              className="nextbtn"
              onClick={() => {
                checklogin() && setactive(4);
              }}
            >
              Next
            </button>
          </div>
        )}
        {active == 4 && (
          <div className="btns">
            {/* <button className='backbtn'
              onClick={() => {
                checklogin() && setactive(3)
              }}
            >Back</button> */}
            <button
              className="nextbtn"
              onClick={() => {
                // setselectedorderid(12345);
                // setordersuccesscont(true);
              }}
            >
              View Invoice
            </button>
          </div>
        )}
      </div>
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default Cart;
