import React from 'react';

class FoodMenu extends React.Component {

	render() {
  	return (
      <div className="ruby-foodmenu">
        <object data="images/close.svg" type="image/svg+xml" className="rudy-close corner-padding">
            <img src="images/close.png" className="rudy-close corner-padding" />
        </object>
        <div className="rudy-foodmenu-title">
          MENU
        </div>
      </div>
  	);
  }
}

export default FoodMenu;