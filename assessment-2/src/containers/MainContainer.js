import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import RoomSelector from '../components/RoomSelector';
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
        <RoomSelector
          handleChange={handleChange}
          toggleAbility={toggleAbility}
          roomState={roomState}
          ind={ind}
          key={shortid.generate()}
        />
      );
    });
    return (
      <div>
        {roomsTwoToFour}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
