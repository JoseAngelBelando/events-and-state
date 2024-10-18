import styled from 'styled-components';

const StyledSquare = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${({ color }) => color};
  transition: background-color 0.3s ease;
`;

export { StyledSquare };
