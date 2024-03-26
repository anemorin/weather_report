import styled from 'styled-components';
import React from 'react';

const HeaderContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid white;
  padding: 10px 0;
`;

const Header: React.FC = () => {
  return <HeaderContainer>weather_report</HeaderContainer>;
};

export default Header;
