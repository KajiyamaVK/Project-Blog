import styled from 'styled-components';
import Image from 'next/image';

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
`;

const Logo = styled(Image)`
    width:45px;
    height:45px; 
    padding:30px 50px;
`;



export { Main, LinksContainer, Logo }