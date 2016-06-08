import React from 'react';

class FoodMenu extends React.Component {

  constructor() {
      super();
      this.state = {
          visible: false,
          menu_status: 'rudy-foodmenu'
      }
  }

  showHide() {

    if (!this.state.visible) {
      this.setState({ menu_status: 'rudy-foodmenu rudy-menu-open', visible: true });
    } else {
      this.setState({ menu_status: 'rudy-foodmenu', visible: false });
    }
  }

	render() {

    let food_data = this.props.data.data;

  	return (
      <div className={this.state.menu_status}>

        <div className="rudy-foodmenu-title">
          MENU
        </div>

        <div className="rudy-item-cont">

          {food_data.map( function( info, i ) {
            var dots = (info.price) ? '............................................................' : '';
            return (
              <ul key={i}>
                <li>{info.name}{dots}</li>
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