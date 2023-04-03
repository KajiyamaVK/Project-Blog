import styled from 'styled-components';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';

const Main = styled.div`
    background-color: #333;
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 100px;
    justify-content: space-between;
`;

const LinksContainer = styled.div`
    display: flex;
    position: relative;
    @media (max-width: 768px) {
        display: none;   
    }
`;

const FiMenuIcon = styled(FiMenu)`
    display: none;
    @media (max-width: 768px) {
        display: block;
        margin: 40px 20px;
        font-size: 30px;
        color: #ddd;
    }
`;

const Logo = styled(Image)`
    width:45px;
    height:45px; 
    padding:30px 50px;
`;



export { Main, LinksContainer, Logo, FiMenuIcon }