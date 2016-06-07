import React from 'react';
import {render} from 'react-dom';
import Header from './header.jsx';
import Main from './main.jsx';
import Footer from './footer.jsx';
import FoodMenu from './foodmenu.jsx';

class RudySite extends React.Component {
  	render () {
    	return (
    		<div>
    			<Header />
      			<Main />
      			<Footer />
      			<FoodMenu data={this.props}/>
      		</div>
    	);
  	}
}

render(<RudySite data={rudy_menu}/>, document.getElementById('app'));