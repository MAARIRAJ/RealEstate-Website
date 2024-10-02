import React from "react";
import './SubscriptionBanner.css';

const SubscriptionBanner = () => {
  return (
    <section className="subscription-banner">
      <div className="subscription-content">
        <h2>Subscribe to get the latest news for you!</h2>
        <div className="email-input-container">
          <input type="email" placeholder="Enter your email..." />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="house-image">
        
        <img src={require('../images/logo.png')} alt="House" />
      </div>
    </section>
  );
};

export default SubscriptionBanner;
