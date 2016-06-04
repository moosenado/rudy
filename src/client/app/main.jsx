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
      		</div>
   		 );
 	 }
}

export default Main;