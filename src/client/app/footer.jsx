import React from 'react';

class Footer extends React.Component {

	render() {
    	return (
      		<footer className="rudy-footer">
      			<div className="rudy-copy corner-padding">
      				<ul>
      					<li>2016 Rudy</li>
      					<li>|</li>
      					<li>All Rights Reserved</li>
      					<li className="rudy-hide-desktop">|</li>
                		<li className="rudy-hide-desktop"><a href="http://www.drewclose.com" target="_blank">Drew Close Design</a></li>
      				</ul>
      			</div>
      			<div className="rudy-design corner-padding rudy-hide-mobile">
      				<a href="http://www.drewclose.com" target="_blank">Drew Close Design</a>
      			</div>
     	 	</footer>
    	);
  	}
}

export default Footer;