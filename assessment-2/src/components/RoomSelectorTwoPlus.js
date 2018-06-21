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
  padding: 3px;
  line-height: 10px;
`;

const Header = styled.div`
  font-weight: ${props => props.ability ? 'normal' : 'bold'};
  font-size: 10px;
`;

const SelectorInner = styled.section`
  background-color: ${props => props.ability ? 'none' : 'white'};
  font-weight: normal;
  font-size: 9px;
  height: 57px;
  padding: 5px 3px;
  box-sizing: border-box;
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

const RoomSelectorTwo = props => {
  const { ability } = props;
  return (
    <div>
      <SelectorOuter ability={ability}>
        <Header ability={ability}>
          <input type="checkbox" value="2" onClick={() => props.toggleAbility()} />
          Room 2
        </Header>
        <SelectorInner ability={ability}>
          <AdultsSelector>
            <SelectorHeading>
              Adults <br />
              (18+) <br />
            </SelectorHeading>
            <select disabled={ability}>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </AdultsSelector>
          <ChildrenSelector>
            <SelectorHeading>
              Children <br />
              (0-17) <br />
            </SelectorHeading>
            <select disabled={ability}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </ChildrenSelector>
        </SelectorInner>
      </SelectorOuter>
    </div>
  );
}


export default RoomSelectorTwo;
