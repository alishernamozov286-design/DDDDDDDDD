import React from 'react';
import styled from 'styled-components';
import useResponsive from '../hooks/useResponsive';

const TestContainer = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  margin: 20px;
`;

const DeviceInfo = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const BreakpointIndicator = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const BreakpointBadge = styled.span`
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  background-color: ${props => props.active ? '#d4af37' : '#ccc'};
  color: ${props => props.active ? 'white' : '#333'};
`;

const ResponsiveTest = () => {
  const { 
    width, 
    height, 
    isMobile, 
    isTablet, 
    isDesktop,
    isSmallMobile,
    isLargeDesktop,
    breakpoints
  } = useResponsive();

  return (
    <TestContainer>
      <h2>Responsive Design Test</h2>
      <p>This component helps verify responsive design implementation.</p>
      
      <DeviceInfo>
        <h3>Current Device Information</h3>
        <p><strong>Screen Size:</strong> {width} × {height} pixels</p>
        <p><strong>Device Type:</strong> 
          {isSmallMobile && ' Small Mobile'}
          {isMobile && !isSmallMobile && ' Mobile'}
          {isTablet && ' Tablet'}
          {isDesktop && !isLargeDesktop && ' Desktop'}
          {isLargeDesktop && ' Large Desktop'}
        </p>
      </DeviceInfo>
      
      <DeviceInfo>
        <h3>Breakpoint Status</h3>
        <BreakpointIndicator>
          <BreakpointBadge active={width <= breakpoints.xs}>
            XS (≤ {breakpoints.xs}px)
          </BreakpointBadge>
          <BreakpointBadge active={width <= breakpoints.sm}>
            SM (≤ {breakpoints.sm}px)
          </BreakpointBadge>
          <BreakpointBadge active={width <= breakpoints.md}>
            MD (≤ {breakpoints.md}px)
          </BreakpointBadge>
          <BreakpointBadge active={width <= breakpoints.lg}>
            LG (≤ {breakpoints.lg}px)
          </BreakpointBadge>
          <BreakpointBadge active={width > breakpoints.lg}>
            XL (&gt; {breakpoints.lg}px)
          </BreakpointBadge>
        </BreakpointIndicator>
      </DeviceInfo>
      
      <DeviceInfo>
        <h3>Responsive Behavior</h3>
        <p>Resize your browser window to see how the layout adapts to different screen sizes.</p>
        <p>The website should provide an optimal experience on all devices.</p>
      </DeviceInfo>
    </TestContainer>
  );
};

export default ResponsiveTest;