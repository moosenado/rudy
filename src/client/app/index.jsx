import React from 'react';
import {render} from 'react-dom';
import Main from './main.jsx';
import Footer from './footer.jsx';
import FoodMenu from './foodmenu.jsx';
import Contact from './contact.jsx';

class RudySite extends React.Component {

	constructor() {
      	super();
		this.state = {
			visible: false,
			overlay_class: 'rudy-darkoverlay',
			mobileicon_class_closed: 'rudy-chevron corner-padding rudy-show-general',
			mobileicon_class_open: 'rudy-close corner-padding rudy-hide-general',
			menu_icon_class: 'rudy-menu-icon-closed',
			contact_icon_class: 'rudy-contact-icon-closed'
		}
  	}

	showMenu() {

		this.refs.menu.showHide();

		if (!this.state.visible) {
			this.setState({
				overlay_class: 'rudy-darkoverlay rudy-darkoverlay-dark',
				mobileicon_class_closed: 'rudy-chevron corner-padding rudy-hide-general',
				mobileicon_class_open: 'rudy-close corner-padding rudy-show-general',
				visible: true,
				menu_icon_class: 'rudy-menu-icon-open'
			});
		} else {
			this.setState({
				overlay_class: 'rudy-darkoverlay',
				mobileicon_class_closed: 'rudy-chevron corner-padding rudy-show-general',
				mobileicon_class_open: 'rudy-close corner-padding rudy-hide-general',
				visible: false,
				menu_icon_class: 'rudy-menu-icon-closed'
			});
		}
	}

	showContact() {

		this.refs.contact.showHide();

		if (!this.state.visible) {
			this.setState({
				overlay_class: 'rudy-darkoverlay rudy-darkoverlay-dark',
				visible: true,
				contact_icon_class: 'rudy-contact-icon-open'
			});
		} else {
			this.setState({
				overlay_class: 'rudy-darkoverlay',
				visible: false,
				contact_icon_class: 'rudy-contact-icon-closed'
			});
		}
	}

  	render () {
    	return (
    		<div>
	    		<header className="rudy-header">
	      			<nav className="rudy-nav-desktop corner-padding">
	      				<ul>
	      					<li onClick={this.showMenu.bind(this)} className={this.state.menu_icon_class}>Menu</li>
	      					<li>|</li>
	      					<li onClick={this.showContact.bind(this)} className={this.state.contact_icon_class}>Contact</li>
	      				</ul>
	      			</nav>
		            <nav className="rudy-nav-mobile" onClick={this.showMenu.bind(this)}>
		             	 <object data="images/chevron.svg" type="image/svg+xml" className={this.state.mobileicon_class_closed}>
		                	<img src="images/chevron.png" />
		              	</object>
		                <object data="images/close.svg" type="image/svg+xml" className={this.state.mobileicon_class_open}>
				            <img src="images/close.png" className="rudy-close corner-padding" />
				        </object>
		            </nav>
	     	 	</header>
      			<Main />
      			<Footer />
      			<div className={this.state.overlay_class}></div>
      			<FoodMenu ref="menu" data={this.props}/>
      			<Contact ref="contact" />
      		</div>
    	);
  	}
}

render(<RudySite data={rudy_menu}/>, document.getElementById('app'));