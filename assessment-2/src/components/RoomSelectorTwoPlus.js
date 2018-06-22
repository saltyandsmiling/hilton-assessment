import React from 'react';
import styled from 'styled-components';

const SelectorOuter = styled.section`
  background-color: ${props => props.ability ? '#DBDBE3' : '#E7E7E7'};
  border: ${props => props.ability ? 'solid 3px #CDD0DF' : 'solid 3px transparent'};
  display: inline-block;
  box-sizing: border-box;
  float: left;
  width: 100px;
  height: 87px;
  margin: 3px;
  font-family: Verdana;
  border-radius: 7px;
  line-height: 10px;
`;

const Header = styled.div`
  font-weight: ${props => props.ability ? 'normal' : 'bold'};
  line-height: 2em;
  font-size: 10px;
  padding-left: 3px;
`;

const SelectorInner = styled.section`
  background-color: ${props => props.ability ? 'none' : 'white'};
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

const RoomSelectorTwo = (props) => {
  let { handleChange, toggleAbility, roomState, ind } = props;
  const { ability, adults, children } = roomState;
  return (
    <div>
      <SelectorOuter ability={ability}>
        <Header ability={ability}>
          <input type="checkbox" onClick={() => toggleAbility(ind)} checked={!ability} />
          Room {ind + 2}
        </Header>
        <SelectorInner ability={ability}>
          <AdultsSelector>
            <SelectorHeading>
              Adults <br />
              (18+) <br />
            </SelectorHeading>
            <select disabled={ability} id={`adults ${ind}`} value={adults} onChange={handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </AdultsSelector>
          <ChildrenSelector>
            <SelectorHeading>
              Children <br />
              (0-17) <br />
            </SelectorHeading>
            <select disabled={ability} id={`children ${ind}`} value={children} onChange={handleChange}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </ChildrenSelector>
        </SelectorInner>
      </SelectorOuter>
    </div>
  );
};


export default RoomSelectorTwo;
