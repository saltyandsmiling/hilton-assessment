import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const SubmitButton = props => <StateSubmit onClick={props.persistState}>Submit</StateSubmit>;

SubmitButton.propTypes = {
  persistState: PropTypes.func.isRequired,
};

export default SubmitButton;
