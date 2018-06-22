import React, { Component } from 'react';
import { connect } from 'react-redux';
import RoomSelector from '../components/RoomSelector';
import RoomSelectorTwoPlus from '../components/RoomSelectorTwoPlus';
import * as Actions from '../actions/actions';


const mapStateToProps = store => ({
  ability: store.reducer.ability,
});

const mapDispatchToProps = dispatch => ({
  toggleAbility: (ind) => {
    dispatch(Actions.toggleRoom(ind));
  },
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { ability, toggleAbility } = this.props;
    const roomsTwoToFour = ability.map((room, ind) => {
      return <RoomSelectorTwoPlus toggleAbility={toggleAbility} ability={ability[ind]} ind={ind} />;
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
