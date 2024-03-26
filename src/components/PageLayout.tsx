import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
  gap?: number;
}

const LayoutContainer = styled.div<{
  gap?: number;
}>`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  height: 100%;
  gap: ${({ gap }) => (gap ? gap : 0)}px;
  margin: 36px 0;
  flex-direction: column;
`;

const PageLayout: React.FC<Props> = ({ children, gap }) => {
  return <LayoutContainer gap={gap}>{children}</LayoutContainer>;
};

export default PageLayout;
