import React from 'react';

class Header extends React.Component {

	render() {
    	return (
      		<header className="rudy-header">
      			<nav className="rudy-nav-desktop corner-padding">
      				<ul>
      					<li>Menu</li>
      					<li>|</li>
      					<li>Contact</li>
      				</ul>
      			</nav>

            <nav className="rudy-nav-mobile">
              <object data="images/chevron.svg" type="image/svg+xml" className="rudy-chevron corner-padding">
                <img src="images/chevron.png" />
              </object>
            </nav>
     	 	</header>
    	);
  	}
}

export default Header;