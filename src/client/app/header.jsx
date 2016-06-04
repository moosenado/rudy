import React from 'react';

class Header extends React.Component {

	render() {
    	return (
      		<header className="rudy-header">
      			<nav className="rudy-nav">
      				<ul>
      					<li>Menu</li>
      					<li>|</li>
      					<li>Contact</li>
      				</ul>
      			</nav>
     	 	</header>
    	);
  	}
}

export default Header;