import React from 'react';
import GMap from './gmap.jsx';
import Hours from './hours.jsx';

class Contact extends React.Component {

  constructor() {
      super();
      this.state = {
          visible       : false,
          contact_status: 'rudy-contact'
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

    if (this.refs.hours.state.hours_visible) {
      this.refs.hours.showHide();
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

  showHours() {

    this.refs.hours.showHide();

    if (!this.refs.hours.state.hours_visible) {
      this.refs.hours.setState({ hours_visible: true });
    } else {
      this.refs.hours.setState({ hours_visible: false });
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
                    <img src="images/iphone.png" className="rudy-contact-images-phone rudy-contact-img-padding"/>
                  </object>
                </a>
              </li>
              <li className="rudy-contact-phone-height">
                <div className="rudy-contact-info-cont">
                  <div className="rudy-contact-info-centered">
                    <a href="tel:6477487839"><span className="rudy-hide-mobile">647.748.7839</span><span className="rudy-hide-desktop">Call</span></a>
                  </div>
                </div>
              </li>
              <li>
                <a href="mailto:info@rudyresto.com" className="svg">
                  <object data="images/email.svg" type="image/svg+xml" className="rudy-contact-images-email rudy-contact-img-padding">
                    <img src="images/email.png" className="rudy-contact-images-email rudy-contact-img-padding"/>
                  </object>
                </a>
              </li>
              <li className="rudy-contact-email-height">
                <div className="rudy-contact-info-cont">
                  <div className="rudy-contact-info-centered">
                    <a href="mailto:info@rudyresto.com"><span className="rudy-hide-mobile">info@rudyresto.com</span><span className="rudy-hide-desktop">Email</span></a>
                  </div>
                </div>
              </li>
              <li onClick={this.showMap.bind(this)} className="svg">
                <object data="images/map_pin.svg" type="image/svg+xml" className="rudy-contact-images-pin rudy-contact-img-padding">
                  <img src="images/map_pin.png" className="rudy-contact-images-pin rudy-contact-img-padding"/>
                </object>
              </li>
              <li className="rudy-contact-pin-height">
                <div className="rudy-contact-info-cont">
                  <div className="rudy-contact-info-centered">
                    <div className="rudy-pointer" onClick={this.showMap.bind(this)}><span className="rudy-hide-mobile">View Map</span><span className="rudy-hide-desktop">Map</span></div>
                  </div>
                </div>
              </li>
              <li onClick={this.showHours.bind(this)} className="svg">
                <object data="images/clock.svg" type="image/svg+xml" className="rudy-contact-images-clock rudy-contact-img-padding">
                  <img src="images/clock.png" className="rudy-contact-images-clock rudy-contact-img-padding"/>
                </object>
              </li>
              <li className="rudy-contact-clock-height">
                <div className="rudy-contact-info-cont">
                  <div className="rudy-contact-info-centered">
                    <div className="rudy-pointer" onClick={this.showHours.bind(this)}>Hours</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          
        </div>
        <GMap ref="gmap" initialCenter={initialCenter}/>
        <Hours ref="hours" data={this.props} />
      </div>
  	);
  }
}

export default Contact;