import React, { Component } from 'react';
import { connect } from 'react-redux';
import RoomSelector from '../components/RoomSelector';
import RoomSelectorTwoPlus from '../components/RoomSelectorTwoPlus';
import * as Actions from '../actions/actions';


const mapStateToProps = store => ({
  ability: store.reducer.ability,
});

const mapDispatchToProps = dispatch => ({
  toggleAbility: () => {
    dispatch(Actions.toggleRoom());
  },
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RoomSelector />
        <RoomSelectorTwoPlus
          toggleAbility={this.props.toggleAbility}
          ability={this.props.ability}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
