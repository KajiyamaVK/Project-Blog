import styled from 'styled-components';
import Link from 'next/link';

const Main = styled.div`
    margin: 40px 20px;
    padding-bottom:20px;
    position:relative;
    &:hover{
        cursor:pointer;
    }
    &::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #ddd;
        bottom:0;
        left:0;
        transform-origin:bottom left;
        transform: scaleX(0);
        transition: transform 0.3s ease-out;
    }
    &:hover::after{
        transform:scaleX(1);
        transform-origin:bottom left;
    }
`;

const Number = styled.span`
    color:#00bf63;
    margin:0 10px 0 0px;
`;

const LinkLabel = styled.span`
    color:#ddd
`;

const LinkComponent = styled(Link)`
    text-decoration: none;
`;

export { Main, Number, LinkLabel, LinkComponent }