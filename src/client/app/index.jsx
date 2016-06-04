import React from 'react';
import {render} from 'react-dom';
import Header from './header.jsx';
import Main from './main.jsx';
import Footer from './footer.jsx';

class RudySite extends React.Component {
  	render () {
    	return (
    		<div>
    			<Header />
      			<Main />
      			<Footer />
      		</div>
    	);
  	}
}

render(<RudySite/>, document.getElementById('app'));