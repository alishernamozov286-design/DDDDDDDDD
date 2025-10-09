import styled from 'styled-components';

const ResponsiveGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 3}, 1fr);
  gap: ${props => props.gap || '30px'};
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(${props => props.lgColumns || props.columns || 3}, 1fr);
    gap: ${props => props.lgGap || props.gap || '25px'};
  }
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(${props => props.mdColumns || 2}, 1fr);
    gap: ${props => props.mdGap || props.gap || '20px'};
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(${props => props.smColumns || 2}, 1fr);
    gap: ${props => props.smGap || props.gap || '15px'};
  }
  
  @media (max-width: 576px) {
    grid-template-columns: repeat(${props => props.xsColumns || 1}, 1fr);
    gap: ${props => props.xsGap || props.gap || '12px'};
  }
`;

export default ResponsiveGrid;