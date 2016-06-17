import React from 'react';

class Contact extends React.Component {

  constructor() {
      super();
      this.state = {
          visible: false,
          contact_status: 'rudy-contact'
      }
  }

  showHide() {

    if (!this.state.visible) {
      this.setState({ contact_status: 'rudy-contact rudy-contact-open', visible: true });
    } else {
      this.setState({ contact_status: 'rudy-contact', visible: false });
    }
  }

	render() {

  	return (
      <div className={this.state.contact_status}>
        <div className="rudy-contact-centered">
          <ul>
            <li>
              <object data="images/iphone.svg" type="image/svg+xml" className="rudy-contact-images-phone">
                <img src="images/iphone.png" />
              </object>
            </li>
            <li className="rudy-contact-phone-height">
              <div className="rudy-contact-info-cont">
                <div className="rudy-contact-info-centered">
                  416.434.9943
                </div>
              </div>
            </li>
            <li>
              <object data="images/email.svg" type="image/svg+xml" className="rudy-contact-images-email">
                <img src="images/email.png" />
              </object>
            </li>
            <li className="rudy-contact-email-height">
              <div className="rudy-contact-info-cont">
                <div className="rudy-contact-info-centered">
                  info@rudyresto.com
                </div>
              </div>
            </li>
            <li>
              <object data="images/map_pin.svg" type="image/svg+xml" className="rudy-contact-images-pin">
                <img src="images/map_pin.png" />
              </object>
            </li>
            <li className="rudy-contact-pin-height">
              <div className="rudy-contact-info-cont">
                <div className="rudy-contact-info-centered">
                  View Map
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
  	);
  }
}

export default Contact;