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
                <li>
                  <object data="images/facebook_icon.svg" type="image/svg+xml" className="rudy-social-icon">
                    <img src="images/facebook_icon.png" className="rudy-main-img"/>
                  </object>
                </li>
                <li>
                  <object data="images/twitter_icon.svg" type="image/svg+xml" className="rudy-social-icon">
                    <img src="images/twitter_icon.png" className="rudy-main-img"/>
                  </object>
                </li>
                <li>
                  <object data="images/instagram_logo.svg" type="image/svg+xml" className="rudy-social-icon">
                    <img src="images/instagram_logo.png" className="rudy-main-img"/>
                  </object>
                </li>
              </ul>
            </div>
      		</div>
   		 );
 	 }
}

export default Main;