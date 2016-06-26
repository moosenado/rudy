import React from 'react';

class GMap extends React.Component {

  constructor() {
    super();
    this.state = { 
      zoom        : 14,
      map_visible : false,
      map_class   : 'rudy-gmap',
      clickable_bg: ''
    };
  }

  static propTypes() {
  	initialCenter: React.PropTypes.objectOf(React.PropTypes.number).isRequired
  }

  showHide() {

    if (!this.state.map_visible) {
      this.setState({ map_class: 'rudy-gmap rudy-gmap-open', map_visible: true, clickable_bg: 'rudy-gmap-bg' });
    } else {
      this.setState({ map_class: 'rudy-gmap', map_visible: false, clickable_bg: '' });
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
      <div className='rudy-gmap-canvas' ref="mapCanvas">
      </div>
    </div>
    </div>
  }

  componentDidMount() {
    // create the map, marker and infoWindow after the component has
    // been rendered because we need to manipulate the DOM for Google =(
    this.map = this.createMap()
    this.marker = this.createMarker()
    this.infoWindow = this.createInfoWindow()
  
  }

  createMap() {
    let mapOptions = {
      zoom: this.state.zoom,
      center: this.mapCenter()
    }
    return new google.maps.Map(this.refs.mapCanvas, mapOptions)
  }

  mapCenter() {
    return new google.maps.LatLng(
      this.props.initialCenter.lat,
      this.props.initialCenter.lng
    )
  }

  createMarker() {
    return new google.maps.Marker({
      position: this.mapCenter(),
      map: this.map
    })
	}

  createInfoWindow() {
    let contentString = "<div class='InfoWindow'>619 College Street, Toronto, Ontario</div>"
    return new google.maps.InfoWindow({
      map: this.map,
      anchor: this.marker,
      content: contentString
    })
  }
}

export default GMap;