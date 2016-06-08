import React from 'react';
import {render} from 'react-dom';
import Main from './main.jsx';
import Footer from './footer.jsx';
import FoodMenu from './foodmenu.jsx';

class RudySite extends React.Component {

	constructor() {
      	super();
		this.state = {
			visible: false,
			overlay_class: 'rudy-darkoverlay'
		}
  	}

	showMenu() {

		this.refs.menu.showHide();

		if (!this.state.visible) {
			this.setState({ overlay_class: 'rudy-darkoverlay rudy-darkoverlay-dark', visible: true });
		} else {
			this.setState({ overlay_class: 'rudy-darkoverlay', visible: false });
		}
	}

  	render () {
    	return (
    		<div>
	    		<header className="rudy-header">
	      			<nav className="rudy-nav-desktop corner-padding">
	      				<ul>
	      					<li onClick={this.showMenu.bind(this)}>Menu</li>
	      					<li>|</li>
	      					<li>Contact</li>
	      				</ul>
	      			</nav>
		            <nav className="rudy-nav-mobile" onClick={this.showMenu.bind(this)}>
		              <object data="images/chevron.svg" type="image/svg+xml" className="rudy-chevron corner-padding">
		                <img src="images/chevron.png" />
		              </object>
		            </nav>
	     	 	</header>
      			<Main />
      			<Footer />
      			<div className={this.state.overlay_class}></div>
      			<FoodMenu ref="menu" data={this.props}/>
      		</div>
    	);
  	}
}

render(<RudySite data={rudy_menu}/>, document.getElementById('app'));