import styled from "styled-components";

// const Main = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: center; 
//     max-width: 1000px;
//     margin: 0 auto;
//     height: 70vh;
//     position: relative;
//     padding: 0 100px;
// `;


const Greeting = styled.p`
    font-size: 1rem;
    color: #00bf63;
`;

const Name = styled.h1`
    font-size: clamp(40px, 8vw, 80px);
    color: #d9ffee;
`;

const BigDescription = styled.h1`
    font-size: clamp(40px, 8vw, 80px);
    color: #93c4ae;
`;

const SmallDescription = styled.h1`
    font-size: 1rem;
    color: #93c4ae;
    font-weight: 400;
`;

export { Greeting, Name, BigDescription, SmallDescription };