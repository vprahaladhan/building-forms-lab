import React, { Component } from 'react'
// import { connect } from 'react-redux'

class BandInput extends Component {
  // constructor() {
  //   super();
  //   this.input = React.createRef();
  // }

  state = {
    name: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state.name)
    this.setState({
      name: ''
    })
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
    	    <label>add band</label>
          <input type="text" value={this.state.name} onChange={this.handleChange}/>
          <input type="submit" />
       </form>
     </div>
   );
  }
};

// const mapDispatchToProps = dispatch => ({
//   addBand: text => dispatch({ type: 'ADD_BAND', payload: { text }})
// })

// export default connect(null, mapDispatchToProps)(BandInput);

export default BandInput;