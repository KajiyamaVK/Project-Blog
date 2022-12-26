import { Box } from "@mui/system";
import Link from "next/link";
import Image from "next/image";
import style from "./stylesheet.module.css";
import logo from "../../images/logoXl.png";

export default function TopNavBar (){
    return(
        <Box 
            display={'flex'} 
            justifyContent={'flex-start'} 
            padding={'10px 50px'} 
            
        >
            <Box>
                <Image alt="Logo da Fullstacker" src={logo}/>
                <Link href='/' className={style.links}>
                    {'<Home />'}
                </Link>
                <Link href='/' className={style.links}>
                    {'<Portfólio />'}
                </Link>
                <Link href='/' className={style.links}>
                    {'<Currículo />'}
                </Link>
                <Link href='/' className={style.links}>
                    {'<Sobre mim />'}
                </Link>
                <Link href='/' className={style.links}>
                    {'<Contato />'}
                </Link>
            </Box>           
        </Box>
    ) 
}