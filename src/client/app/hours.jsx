import React from 'react';

class Hours extends React.Component {

  constructor() {
    super();
    this.state = { 
      map_visible : false,
      map_class   : 'rudy-hours',
      clickable_bg: ''
    };
  }

  showHide() {

    if (!this.state.map_visible) {
      this.setState({ map_class: 'rudy-hours rudy-hours-open', map_visible: true, clickable_bg: 'rudy-clickable-bg' });
    } else {
      this.setState({ map_class: 'rudy-hours', map_visible: false, clickable_bg: '' });
    }
  }

	render() {

    let hours_data = this.props.data.data.data[1];

    return <div>
    <div className={this.state.clickable_bg} onClick={this.showHide.bind(this)}></div>
    <div className={this.state.map_class}>
      <div onClick={this.showHide.bind(this)} className="rudy-hide-mobile rudy-hours-close">
        <object data="images/close.svg" type="image/svg+xml" className="rudy-hours-close">
          <img src="images/close.png" className="rudy-hours-close" />
        </object>
      </div>
      <div className="rudy-item-cont">

        {hours_data.map( function( info, i ) {
          var dots = (info.Hours) ? '............................................................' : '';
          return (
            <ul key={i}>
              <li>{info.Day}<span>{dots}</span></li>
              <li>{info.Hours}</li>
            </ul>
          );
        })}

      </div>
    </div>
    </div>
  }
}

export default Hours;