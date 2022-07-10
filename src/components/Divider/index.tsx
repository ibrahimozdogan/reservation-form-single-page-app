import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  left: 0;
  height: 2px;
  margin: 20px 0;
  background: ${(props) => props.theme.colors.lightGray};
`;

function Divider() {
  return (
    <StyledDiv />
  );
}

export default Divider;
