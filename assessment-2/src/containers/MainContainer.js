import React, { Component } from 'react';
import { connect } from 'react-redux';
import RoomSelector from '../components/RoomSelector'


const mapStateToProps = store => ({
  // add pertinent state here
});

const mapDispatchToProps = dispatch => ({

});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <RoomSelector />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
