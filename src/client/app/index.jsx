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
			menu                   : false,
			contact                : false,
			somethings_open        : false,
			overlay_class          : 'rudy-darkoverlay',
			mobileicon_class_open  : 'rudy-close corner-padding rudy-hide-general',
			menu_icon_class        : 'rudy-menu-icon-closed',
			contact_icon_class     : 'rudy-contact-icon-closed'
		}
		this.showMenu        = this.showMenu.bind(this);
		this.showContact     = this.showContact.bind(this);
		this.hideAnyOpenMenu = this.hideAnyOpenMenu.bind(this);
  	}

	showMenu() {

		this.refs.menu.showHide();

		if (!this.state.menu)
		{
			if (this.state.somethings_open){
				this.refs.contact.showHide();
			}

			this.setState({
				overlay_class          : 'rudy-darkoverlay rudy-darkoverlay-dark',
				mobileicon_class_open  : 'rudy-close corner-padding rudy-show-general',
				menu_icon_class        : 'rudy-menu-icon-open',
				contact_icon_class     : 'rudy-contact-icon-closed',
				menu                   : true,
				contact                : false,
				somethings_open		   : true
			});
		} else {
			this.setState({
				overlay_class          : 'rudy-darkoverlay',
				mobileicon_class_open  : 'rudy-close corner-padding rudy-hide-general',
				menu_icon_class        : 'rudy-menu-icon-closed',
				contact_icon_class     : 'rudy-contact-icon-closed',
				menu                   : false,
				contact                : false,
				somethings_open		   : false
			});
		}
	}

	showContact() {

		this.refs.contact.showHide();

		if (!this.state.contact)
		{
			if (this.state.somethings_open){
				this.refs.menu.showHide();
			}

			this.setState({
				overlay_class        : 'rudy-darkoverlay rudy-darkoverlay-dark',
				contact_icon_class   : 'rudy-contact-icon-open',
				menu_icon_class      : 'rudy-menu-icon-closed',
				mobileicon_class_open: 'rudy-close corner-padding rudy-show-general',
				menu                 : false,
				contact              : true,
				somethings_open		 : true
			});
		} else {
			this.setState({
				overlay_class        : 'rudy-darkoverlay',
				contact_icon_class   : 'rudy-contact-icon-closed',
				menu_icon_class      : 'rudy-menu-icon-closed',
				mobileicon_class_open: 'rudy-close corner-padding rudy-hide-general',
				menu                 : false,
				contact              : false,
				somethings_open		 : false
			});
		}
	}

	hideAnyOpenMenu() {

		if (this.state.menu)
		{
			this.showMenu();
		}

		if (this.state.contact)
		{
			this.showContact();
		}
	}

  	render () {
    	return (
    		<div>
	    		<header className="rudy-header">
	      			<nav className="rudy-nav-desktop corner-padding">
	      				<ul>
	      					<li onClick={this.showMenu} className={this.state.menu_icon_class}>Menu</li>
	      					<li>|</li>
	      					<li onClick={this.showContact} className={this.state.contact_icon_class}>Contact</li>
	      				</ul>
	      			</nav>
	      			<nav className="rudy-nav-mobile" onClick={this.hideAnyOpenMenu}>
		                <object data="images/close.svg" type="image/svg+xml" className={this.state.mobileicon_class_open}>
				            <img src="images/close.png" className={this.state.mobileicon_class_open} />
				        </object>
		            </nav>
	     	 	</header>
      			<Main showMenu={this.showMenu} showContact={this.showContact} />
      			<Footer />
      			<div className={this.state.overlay_class} onClick={this.hideAnyOpenMenu}></div>
      			<FoodMenu ref="menu" data={this.props}/>
      			<Contact ref="contact"/>
      		</div>
    	);
  	}
}

render(<RudySite data={rudy_menu}/>, document.getElementById('app'));