import React from 'react';
import GMap from './gmap.jsx';

class Contact extends React.Component {

  constructor() {
      super();
      this.state = {
          visible       : false,
          map_visible   : false,
          contact_status: 'rudy-contact',
          map_status    : 'rudy-gmap'
      }
  }

  showHide() {

    if (!this.state.visible) {
      this.setState({ contact_status: 'rudy-contact rudy-contact-open', visible: true });
    } else {
      this.setState({ contact_status: 'rudy-contact', visible: false });
    }
  }

  showMap() {

    this.refs.gmap.showHide();

    if (!this.state.map_visible) {
      this.setState({ map_visible: true });
    } else {
      this.setState({ map_visible: false });
    }

  }

	render() {

    let initialCenter = { lng: -79.414814, lat: 43.654909 }

  	return (
      <div>
        <div className={this.state.contact_status}>
          <div className="rudy-contact-centered">
            <div className="rudy-foodmenu-title">
              CONTACT
            </div>
            <ul>
              <li>
                <object data="images/iphone.svg" type="image/svg+xml" className="rudy-contact-images-phone">
                  <img src="images/iphone.png" />
                </object>
              </li>
              <li className="rudy-contact-phone-height">
                <div className="rudy-contact-info-cont">
                  <div className="rudy-contact-info-centered">
                    <a href="tel:6477487839">647.748.7839</a>
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
                    <a href="mailto:info@rudyresto.com">info@rudyresto.com</a>
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
                    <div className="rudy-pointer" onClick={this.showMap.bind(this)}>View Map</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          
        </div>
        <GMap ref="gmap" initialCenter={initialCenter}/>
      </div>
  	);
  }
}

export default Contact;