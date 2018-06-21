import React from 'react';
import styled from 'styled-components';

const SelectorOuter = styled.section`
  background-color: #E7E7E7
  width: 100px;
  height: 80px;
  padding: 5px;
  font-family: Verdana;
  border-radius: 7px;
  padding: 5px;
  line-height: 10px;
`;

const Header = styled.div`
  line-height: 2em;
  font-weight: bold;
  font-size: 10px;
  padding-left: 3px;
`;

const SelectorInner = styled.section`
  background-color: white;
  font-weight: normal;
  font-size: 9px;
  height: 61px;
  padding: 6px 5px;
  box-sizing: border-box;
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

const RoomSelector = props => (
  <div>
    <SelectorOuter>
      <Header>Room 1</Header>
      <SelectorInner>
        <AdultsSelector>
          Adults <br />
          (18+) <br />
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </AdultsSelector>
        <ChildrenSelector>
          Children <br />
          (0-17) <br />
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </ChildrenSelector>
      </SelectorInner>
    </SelectorOuter>
  </div>
);

export default RoomSelector;
