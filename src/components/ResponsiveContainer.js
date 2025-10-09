import styled from 'styled-components';

const ResponsiveContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 1200px) {
    max-width: 1100px;
    padding: 0 18px;
  }
  
  @media (max-width: 992px) {
    max-width: 900px;
    padding: 0 16px;
  }
  
  @media (max-width: 768px) {
    max-width: 700px;
    padding: 0 15px;
  }
  
  @media (max-width: 576px) {
    max-width: 100%;
    padding: 0 12px;
  }
`;

export default ResponsiveContainer;