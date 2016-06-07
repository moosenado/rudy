import React from 'react';

class FoodMenu extends React.Component {

  constructor() {
      super();
      this.state = {
          visible: 'rudy-foodmenu'
      }
      console.log(this.state);
  }

  showHide() {

    if (this.state.visible === 'rudy-foodmenu'){
      this.setState({ visible: 'rudy-foodmenu rudy-menu-open' }, function() {
        console.log(this.state);
      });
    }
    else
    {
      this.setState({ visible: 'rudy-foodmenu' }, function() {
        console.log(this.state);
      });
    }

  }

	render() {

    let food_data = this.props.data.data;

  	return (
      <div className={this.state.visible}>

        <object data="images/close.svg" type="image/svg+xml" className="rudy-close corner-padding">
            <img src="images/close.png" className="rudy-close corner-padding" />
        </object>

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