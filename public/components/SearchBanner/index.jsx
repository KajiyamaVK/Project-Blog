import BackgroundImage from '../../images/search_banner.png'
import { Box } from '@mui/system'
import Image from 'next/image'
import { Typography, IconButton } from '@mui/material';
import style from './stylesheet.module.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function SearchBanner(){
    return(
        <div id={style.main}>
             <Typography variant='h3' id={style.portfolioText}>PORTFOLIO</Typography>
             <Typography variant='h1' id={style.devName}>VICTOR KAJIYAMA</Typography>
             <Image src={BackgroundImage} alt="Mesa com teclado e caneta no fundo servindo como banner" id={style.bannerImg}/> 
             <Box id={style.buttonsbar}>
                <IconButton  aria-label="github">
                    <GitHubIcon className={style.icons}/>
                </IconButton>
                <IconButton aria-label="github">
                    <LinkedInIcon  className={style.icons}/>
                </IconButton>
                <IconButton aria-label="github">
                    <WhatsAppIcon  className={style.icons}/>
                </IconButton>
             </Box>
        </div>
        
    )
};