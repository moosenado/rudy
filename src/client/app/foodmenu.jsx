import React from 'react';

class FoodMenu extends React.Component {

	render() {

    let food_data = this.props.data.data;

  	return (
      <div className="ruby-foodmenu">

        <object data="images/close.svg" type="image/svg+xml" className="rudy-close corner-padding">
            <img src="images/close.png" className="rudy-close corner-padding" />
        </object>

        <div className="rudy-foodmenu-title">
          MENU
        </div>

        <div className="rudy-item-cont">

          {food_data.map( function( info, i ) {
            return (
              <ul key={i}>
                <li>{info.name}............................................................</li>
                <li>{info.price}</li>
                <li className="rudy-desc-text">{info.description}</li>
              </ul>
            );
          })}

        </div>

      </div>
  	);
  }
}

export default FoodMenu;