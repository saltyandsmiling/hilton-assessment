import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    return <div>Hello Something else</div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
