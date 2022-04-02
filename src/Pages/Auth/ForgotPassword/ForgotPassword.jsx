import React from "react";
const ForgotPassword = () => {
  return (
    <div className="forgotpassword__container">
      <div className="form__container">
        <heading className="heading">Forgot Password</heading>
        <form>
          <div className="email">
            <label htmlFor="email__input">Enter Email Address</label>
            <input type="text" id="email__input" className="txt-2xl" />
          </div>
          <button className="send__password__button">Send My Password</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
