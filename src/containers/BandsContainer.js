import React, { Component } from 'react';
import { connect } from 'react-redux';

import BandInput from '../components/BandInput';

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <h1>BANDS</h1>
        <ul>
          {this.props.bands.map(band => <li key={band.name}>{band.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: 'ADD_BAND', payload: { name }})
})

export default connect(state => ({ bands: state.bands }), mapDispatchToProps)(BandsContainer);