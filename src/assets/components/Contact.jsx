// import React from "react";
const Contact = () => {
  return (
    <div className="contact_us_green">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-7">
            <form className="form-box">
              <div className="form-wrapper">
                <div className="head-text-box">
                  <p className="contactus-head">Contact us</p>
                  <p className="contactus-subhead">
                    Feel free to contact us and we will get back to you as soon
                    as we can.
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="input-title" htmlFor="FirstName">
                      FIRST NAME
                    </label>
                    <input
                      className="form-control"
                      id="FirstName"
                      name="FirstName"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="input-title" htmlFor="LastName">
                      LAST NAME
                    </label>
                    <input
                      className="form-control"
                      id="LastName"
                      name="Last Name"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="input-title" htmlFor="Email">
                      EMAIL
                    </label>
                    <input className="form-control" id="Email" name="Email" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="input-title" htmlFor="PhoneNumber">
                      PHONE NUMBER
                    </label>
                    <input
                      className="form-control"
                      id="PhoneNumber"
                      name="PhoneNumber"
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <label className="input-title" htmlFor="query">
                      WHAT DO YOU HAVE IN MIND
                    </label>
                    <textarea
                      className="form-control"
                      id="query"
                      placeholder="Please enter query..."
                      rows="5"
                    ></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <button className="btn btn-dark btn-lg">Submit</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-1 d-none d-md-block">
            <div className="vertical-divider"></div>
          </div>
          <div className="col-md-4">
            <div className="container-box">
              <div className="text-content">
                <p className="contactus-head">Contact us</p>
                <p className="contactus-subhead">
                  Feel free to contact us and we will get back to you as soon as
                  we can.
                </p>
              </div>
              <div className="workik-contact-bigbox">
                <div className="workik-contact-box mb-4">
                  <div className="phone text-box mb-2">
                    <img
                      className="contact-svg"
                      src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET21.jpg"
                      alt="Phone"
                    />
                    <p className="contact-text">+1258 3258 5679</p>
                  </div>
                  <div className="address text-box mb-2">
                    <img
                      className="contact-svg"
                      src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET22.jpg"
                      alt="Address"
                    />
                    <p className="contact-text">hello@workik.com</p>
                  </div>
                  <div className="mail text-box">
                    <img
                      className="contact-svg"
                      src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET23.jpg"
                      alt="Mail"
                    />
                    <p className="contact-text">102 street, y cross 485656</p>
                  </div>
                </div>
                <div className="social-media-links d-flex justify-content-around">
                  <a href="">
                    <img
                      className="social-svg"
                      src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg"
                      alt="Email"
                    />
                  </a>
                  <a href="">
                    <img
                      className="social-svg"
                      src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg"
                      alt="Twitter"
                    />
                  </a>
                  <a href="">
                    <img
                      className="social-svg"
                      src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"
                      alt="Instagram"
                    />
                  </a>
                  <a href="">
                    <img
                      className="social-svg"
                      src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg"
                      alt="Facebook"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
