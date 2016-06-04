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

        <div className="rudy-item-cont">
          <ul>
            <li>The Rudy............................................................</li>
            <li>6.99</li>
            <li className="rudy-desc-text">This is the description for a nice meal yep</li>
          </ul>
          <ul>
            <li>Double Cheeseburger............................................................</li>
            <li>3.99</li>
            <li className="rudy-desc-text">This is the description for a nice meal yep</li>
          </ul>
          <ul>
            <li>Rude Dude Tattooed............................................................</li>
            <li>16.99</li>
            <li className="rudy-desc-text">This is the description for a nice meal yep</li>
          </ul>
        </div>

      </div>
  	);
  }
}

export default FoodMenu;