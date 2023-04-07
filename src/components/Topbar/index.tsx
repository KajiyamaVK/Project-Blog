import logo from '../../../public/imgs/logo.png'
import { Main, LinksContainer, Logo, FiMenuIcon } from './style';
import LinkFormated from './Links';
import { Button } from '@mui/material';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import Link from 'next/link';

export default function Topbar() {

    return (
        <Main>
            <Logo src={logo} alt="logo" />
            <LinksContainer>
                <LinkFormated number={1} linkLabel={"Início"} link="#Page1" />
                <LinkFormated number={2} linkLabel={"Sobre"} link="./" />
                <LinkFormated number={3} linkLabel={"Experiência"} link="./" />
                <Button variant='outlined' color='success' sx={{
                    height: '30px',
                    fontSize: '15px',
                    marginTop: '35px',
                    marginRight: '20px'
                }}>
                    <AiOutlineCloudDownload style={{ marginRight: '10px' }} />
                    <Link href='https://1drv.ms/b/s!Aomjw2eFWi_Ii7J1Q5VmUKKstQM9cg?e=YwXt7S' target='_blank' style={{ textDecoration: 'none', color: "#2e7d32" }}>Currículo</Link>
                </Button>
            </LinksContainer>
            <FiMenuIcon />
        </Main>
    )
}