import styled from 'styled-components';

const Main = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    left: 20px;
    font-size:30px;
    color: #ddd;
    &:hover{
        cursor: pointer;
        color: #00bf63;
    }
    &::after{
        content: "";
        display: block;
        width: 1px;
        height: 90px;
        margin: 0px auto;
        background-color: #ddd;
}
`;

const IconContainer = styled.div`
    &:hover{
        cursor: pointer;
        color: #00bf63;
    }
`;

export { Main, IconContainer}