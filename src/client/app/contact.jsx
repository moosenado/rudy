import React from 'react';
import GMap from './gmap.jsx';

class Contact extends React.Component {

  constructor() {
      super();
      this.state = {
          visible       : false,
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

    if (this.refs.gmap.state.map_visible) {
      this.refs.gmap.showHide();
    }
  }

  showMap() {

    this.refs.gmap.showHide();

    if (!this.refs.gmap.state.map_visible) {
      this.refs.gmap.setState({ map_visible: true });
    } else {
      this.refs.gmap.setState({ map_visible: false });
    }

  }

	render() {

    let initialCenter = { lng: -79.414814, lat: 43.654909 }

  	return (
      <div>
        <div className={this.state.contact_status}>
          <div className="rudy-contact-centered">
            <nav className="rudy-nav-mobile" onClick={this.props.hideAnyOpenMenu}>
              <object data="images/close.svg" type="image/svg+xml" className={this.props.open_class}>
                <img src="images/close.png" className={this.props.open_class} />
              </object>
            </nav>
            <div className="rudy-contact-title">
              CONTACT
            </div>
            <ul>
              <li>
                <a href="tel:6477487839" className="svg">
                  <object data="images/iphone.svg" type="image/svg+xml" className="rudy-contact-images-phone rudy-contact-img-padding">
                    <img src="images/iphone.png" />
                  </object>
                </a>
              </li>
              <li className="rudy-contact-phone-height">
                <div className="rudy-contact-info-cont">
                  <div className="rudy-contact-info-centered">
                    <a href="tel:6477487839">647.748.7839</a>
                  </div>
                </div>
              </li>
              <li>
                <a href="mailto:info@rudyresto.com" className="svg">
                  <object data="images/email.svg" type="image/svg+xml" className="rudy-contact-images-email rudy-contact-img-padding">
                    <img src="images/email.png" />
                  </object>
                </a>
              </li>
              <li className="rudy-contact-email-height">
                <div className="rudy-contact-info-cont">
                  <div className="rudy-contact-info-centered">
                    <a href="mailto:info@rudyresto.com">info@rudyresto.com</a>
                  </div>
                </div>
              </li>
              <li onClick={this.showMap.bind(this)} className="svg">
                <object data="images/map_pin.svg" type="image/svg+xml" className="rudy-contact-images-pin rudy-contact-img-padding">
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