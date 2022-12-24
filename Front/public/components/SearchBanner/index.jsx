import BackgroundImage from '../../images/search_banner.png'
import { Box } from '@mui/system'
import Image from 'next/image'
import { Typography, TextField } from '@mui/material'
import { BorderBottom } from '@mui/icons-material'
import style from './stylesheet.module.css'

export default function SearchBanner(){
    return(
        <div id={style.main}>
             <Image src={BackgroundImage} alt="Mesa com teclado e caneta no fundo servindo como banner" id={style.bannerImg}/> 
             <TextField 
                label="O que está procurando?" 
                variant="standard"
                name='searchInput'
                style={{
                    //marginBottom:'100px',
                    position:'absolute',
                    left:'35%',
                    bottom:"45%",
                    width:'30%',
                    borderBottom:'1px solid white'
                }}
                InputProps={{
                    style:{
                        borderColor:'transparent !important',
                        color:"black"
                    }
                }}
                InputLabelProps={{
                    style:{
                        color:"white",
                        marginBottom:"10px",
                    }
                }}
                
            />  
        </div>
    )
};