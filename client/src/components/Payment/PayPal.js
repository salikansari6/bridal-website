import React from "react";
import "../../styles/PayPal.scss";

const PayPal = () => {
  return (
    <div className="paypal">
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter email or Paypal id"
          name="email"
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          id="password"
        />
      </form>
    </div>
  );
};

export default PayPal;
