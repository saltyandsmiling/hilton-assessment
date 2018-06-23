import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SelectorOuter = styled.section`
  color: #4F5055;
  background-color: ${props => (props.ability ? '#DBDBE3' : '#E7E7E7')};
  border: ${props => (props.ability ? 'solid 3px #CDD0DF' : 'solid 3px transparent')};
  display: inline-block;
  box-sizing: border-box;
  float: left;
  width: 103px;
  height: 86px;
  margin: 3px;
  font-family: Verdana;
  border-radius: 7px;
  line-height: 10px;
`;

const Header = styled.div`
  font-weight: ${props => (props.ability ? 'normal' : 'bold')};
  color: ${props => (props.ability ? 'inherit' : 'black')};
  line-height: 2em;
  font-size: 10px;
  padding-left: 3px;
`;

const SelectorInner = styled.section`
  background-color: ${props => (props.ability ? 'none' : 'white')};
  font-weight: normal;
  font-size: 9px;
  height: 60px;
  padding: 5px 3px;
  box-sizing: border-box;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const SelectorHeading = styled.span`
  margin-bottom: 3px;
  display: block;
`;

const AdultsSelector = styled.div`
  width: 50%;
  float: left;
  box-sizing: border-box;
`;

const ChildrenSelector = styled.div`
  width: 50%;
  float: right;
  box-sizing: border-box;
`;

const Checkbox = styled.input`
  position: absolute;
  opacity: 0; 
`;

const CheckBoxContainer = styled.label`
    display: block;
    position: relative;
    padding-left: 19px;
`;

const CheckMark = styled.span`
    position: absolute;
    top: 4px;
    left: 2px;
    height: 11px;
    width: 11px;
    background-color: #FFFFFF;
    box-shadow: inset .5px .5px 0px 0px #898989;
    &:after {
      content: "";
      position: absolute;
      display: none;
      left: 4px;
      top: 1px;
      width: 2px;
      height: 5px;
      border: solid black;
      border-width: 0 1.5px 1.5px 0;
      transform: rotate(45deg);
      display: ${props => (props.ability ? 'default' : 'block')}
    }
`;

const RoomSelector = (props) => {
  const { handleChange, toggleAbility, persistState, roomState, ind } = props;
  const { adults, children } = roomState;
  let { ability } = roomState;
  let header;
  if (ind) {
    header = (
      <Header ability={ability}>
        <CheckBoxContainer>Room {ind + 1}
          <Checkbox type="checkbox" onClick={() => toggleAbility(ind)} checked={!ability} readOnly />
          <CheckMark ability={ability} />
        </CheckBoxContainer>
      </Header>
    );
  } else {
    header = <Header ability={!ability}>Room {ind + 1}</Header>;
    ability = !ability;
  }

  return (
    <div>
      <SelectorOuter ability={ability}>
        {header}
        <SelectorInner ability={ability}>
          <AdultsSelector>
            <SelectorHeading>
              Adults <br />
              (18+) <br />
            </SelectorHeading>
            <select disabled={ability} id={`adults ${ind}`} value={adults} onChange={handleChange}>
              <option value={1}>1</option>
              <option value={2}>2</option>
            </select>
          </AdultsSelector>
          <ChildrenSelector>
            <SelectorHeading>
              Children <br />
              (0-17) <br />
            </SelectorHeading>
            <select disabled={ability} id={`children ${ind}`} value={children} onChange={handleChange}>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
            </select>
          </ChildrenSelector>
        </SelectorInner>
      </SelectorOuter>
    </div>
  );
};

RoomSelector.propTypes = {
  handleChange: PropTypes.func.isRequired,
  toggleAbility: PropTypes.func.isRequired,
  roomState: PropTypes.shape({
    ability: PropTypes.bool.isRequired,
    adults: PropTypes.number.isRequired,
    children: PropTypes.number.isRequired,
  }).isRequired,
  ind: PropTypes.number.isRequired,
};

export default RoomSelector;
