import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>About Us</h3>
            <p>We are a Hope Funding organization dedicated to helping the less fortunate.</p>
          </div>
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <p>Email: info@hopefunding.org</p>
            <p>Phone: 254-7224-5344</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>&copy; 2023 Hope Funding. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
