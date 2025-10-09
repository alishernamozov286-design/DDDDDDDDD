import React from 'react';
import styled from 'styled-components';
import useResponsive from '../hooks/useResponsive';

const DemoContainer = styled.div`
  padding: 20px;
  background: rgba(43, 30, 77, 0.7);
  border-radius: 15px;
  margin: 20px 0;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const DemoTitle = styled.h3`
  color: white;
  margin-bottom: 15px;
  text-align: center;
`;

const DemoContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
`;

const DemoItem = styled.div`
  background: rgba(106, 17, 203, 0.3);
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  color: #d4c4fb;
`;

const ResponsiveDemo = () => {
  const { 
    width, 
    height, 
    isMobile, 
    isTablet, 
    isDesktop, 
    isLargeDesktop, 
    isSmallMobile,
    orientation,
    isBreakpoint
  } = useResponsive();

  return (
    <DemoContainer>
      <DemoTitle>Responsive Design Demo</DemoTitle>
      <DemoContent>
        <DemoItem>
          <strong>Screen Size:</strong><br />
          {width} × {height}
        </DemoItem>
        <DemoItem>
          <strong>Device Type:</strong><br />
          {isMobile && 'Mobile'}
          {isTablet && 'Tablet'}
          {isDesktop && 'Desktop'}
          {isLargeDesktop && 'Large Desktop'}
        </DemoItem>
        <DemoItem>
          <strong>Mobile Sizes:</strong><br />
          Small: {isSmallMobile ? 'Yes' : 'No'}
        </DemoItem>
        <DemoItem>
          <strong>Orientation:</strong><br />
          {orientation}
        </DemoItem>
        <DemoItem>
          <strong>Breakpoints:</strong><br />
          xs: {isBreakpoint('xs') ? '✓' : '✗'}<br />
          sm: {isBreakpoint('sm') ? '✓' : '✗'}<br />
          md: {isBreakpoint('md') ? '✓' : '✗'}
        </DemoItem>
      </DemoContent>
    </DemoContainer>
  );
};

export default ResponsiveDemo;