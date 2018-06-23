import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortId from 'shortId';
import PropTypes from 'prop-types';
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
  render() {
    const { roomState, toggleAbility, handleChange } = this.props;
    const roomsTwoToFour = roomState.map((roomState, ind) => (
      <RoomSelector
        handleChange={handleChange}
        toggleAbility={toggleAbility}
        roomState={roomState}
        ind={ind}
        key={shortId.generate()}
      />
    ));
    return (
      <div>
        {roomsTwoToFour}
      </div>
    );
  }
}

MainContainer.propTypes = {
  handleChange: PropTypes.func.isRequired,
  toggleAbility: PropTypes.func.isRequired,
  roomState: PropTypes.arrayOf(PropTypes.shape({
    ability: PropTypes.bool.isRequired,
    adults: PropTypes.number.isRequired,
    children: PropTypes.number.isRequired,
  })).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
