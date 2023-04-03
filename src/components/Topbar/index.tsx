import logo from '../../../public/imgs/logo.png'
import { Main, LinksContainer, Logo } from './style';
import Links from './Links';
import { Button } from '@mui/material';
import { AiOutlineCloudDownload } from 'react-icons/ai';

export default function Topbar(){

    return(
        <Main>
            <Logo src={logo} alt="logo"/>
            <LinksContainer>
                <Links number={1} link={"Início"}/>
                <Links number={2} link={"Sobre"}/>
                <Links number={3} link={"Experiência"}/>
                <Button variant='outlined' color='success' sx={{
                    height:'30px',
                    fontSize:'15px',
                    marginTop:'35px',
                    marginRight:'20px'
                }}><AiOutlineCloudDownload style={{marginRight:'10px'}}/>Currículo</Button>
            </LinksContainer>
        </Main>
    )
}