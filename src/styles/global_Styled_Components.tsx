import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  height: 70vh;
  position: relative;
  
  @media (max-width: 768px) {
    margin: 0 20px; // Change margin on X-axis for smaller screens
    padding: 0;
  }
`;

export { Main };