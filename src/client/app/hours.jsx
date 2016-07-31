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
      this.setState({ map_class: 'rudy-hours rudy-gmap-open', map_visible: true, clickable_bg: 'rudy-clickable-bg' });
    } else {
      this.setState({ map_class: 'rudy-hours', map_visible: false, clickable_bg: '' });
    }
  }

	render() {
    return <div>
    <div className={this.state.clickable_bg} onClick={this.showHide.bind(this)}></div>
    <div className={this.state.map_class}>
      <div onClick={this.showHide.bind(this)} className="rudy-hide-mobile rudy-gmap-close">
        <object data="images/close.svg" type="image/svg+xml" className="rudy-gmap-close">
          <img src="images/close.png" className="rudy-gmap-close" />
        </object>
      </div>
      </div>
    </div>
  }
}

export default Hours;