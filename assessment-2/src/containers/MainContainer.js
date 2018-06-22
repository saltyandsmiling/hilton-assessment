import React, { Component } from 'react';
import { connect } from 'react-redux';
import RoomSelector from '../components/RoomSelector';
import RoomSelectorTwoPlus from '../components/RoomSelectorTwoPlus';
import * as Actions from '../actions/actions';


const mapStateToProps = store => ({
  roomState: store.reducer.roomState,
});

const mapDispatchToProps = dispatch => ({
  toggleAbility: (ind) => {
    dispatch(Actions.toggleRoom(ind));
  },
  handleChange: (e) => {
    const val = e.target.value;
    const personAndInd = e.target.id.split(' ');
    const person = personAndInd[0];
    const ind = personAndInd[1];
    dispatch(Actions.handleChange(ind, val, person));
  },
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { roomState, toggleAbility, handleChange } = this.props;
    const roomsTwoToFour = roomState.map((roomState, ind) => {
      return (
        <RoomSelectorTwoPlus
          handleChange={handleChange}
          toggleAbility={toggleAbility}
          roomState={roomState}
          ind={ind}
        />
      );
    });
    return (
      <div>
        <RoomSelector />
        {roomsTwoToFour}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
