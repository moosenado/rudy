import React from 'react';

class Main extends React.Component {

  	render() {
    	return (
      		<div className="rudy-main">
      			<object data="images/burger.svg" type="image/svg+xml" className="rudy-burger">
  					 <img src="images/burger.png" className="rudy-burger"/>
				    </object>
        		<object data="images/rudy_facade_final.svg" type="image/svg+xml" className="rudy-main-img">
  					 <img src="images/rudy_facade_final.png" className="rudy-main-img"/>
				    </object>
            <div className="rudy-social">
              <ul>
                <li onClick={this.props.showMenu} className="rudy-hide-desktop rudy-mobile-nav-text">Menu</li>
                <li onClick={this.props.showContact} className="rudy-hide-desktop rudy-mobile-nav-text">Contact</li>
                <li>
                  <a href="https://www.instagram.com/rudyresto/" target="_blank">
                    <object data="images/instagram_logo.svg" type="image/svg+xml" className="rudy-social-icon">
                      <img src="images/instagram_logo.png" className="rudy-social-icon"/>
                    </object>
                  </a>
                </li>
              </ul>
            </div>
      		</div>
   		 );
 	 }
}

export default Main;