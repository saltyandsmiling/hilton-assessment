import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortId from 'shortid';
import PropTypes from 'prop-types';
import RoomSelector from '../components/RoomSelector';
import * as Actions from '../actions/actions';
import { saveState } from '../../loadState';
import store from '../store';
import styled from 'styled-components';


const mapStateToProps = store => ({
  roomState: store.reducer.roomState,
});

const mapDispatchToProps = dispatch => ({
  toggleAbility: (ind) => {
    dispatch(Actions.toggleRoom(ind));
  },
  handleChange: (e) => {
    const val = parseInt(e.target.value, 10);
    const personAndInd = e.target.id.split(' ');
    const person = personAndInd[0];
    const ind = personAndInd[1];
    dispatch(Actions.handleChange(ind, val, person));
  },
  persistState: () => {
    saveState(store.getState());
  },
});

const StateSubmit = styled.button`
  padding: 4px 7px;
  margin: 5px 5px; 
  border-radius: 0px;
  font-size: 12px;
  background-color: #C0C0C0;
  box-sizing: border-box;
  border-bottom: solid 2px #666666;
  border-right: solid 2px #666666;
`;

class MainContainer extends Component {
  render() {
    const { roomState, toggleAbility, handleChange, persistState } = this.props;
    const rooms = roomState.map((roomState, ind) => (
      <RoomSelector
        persistState={persistState}
        handleChange={handleChange}
        toggleAbility={toggleAbility}
        roomState={roomState}
        ind={ind}
        key={shortId.generate()}
      />
    ));
    return (
      <div>
        {rooms}
        <div>
          <br style={{ lineHeight: 6 }} />
          <StateSubmit onClick={persistState}>Submit</StateSubmit>
        </div>
      </div>
    );
  }
}

MainContainer.propTypes = {
  persistState: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  toggleAbility: PropTypes.func.isRequired,
  roomState: PropTypes.arrayOf(PropTypes.shape({
    ability: PropTypes.bool.isRequired,
    adults: PropTypes.number.isRequired,
    children: PropTypes.number.isRequired,
  })).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
