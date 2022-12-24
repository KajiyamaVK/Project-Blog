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
            margin={'10px 50px'} 
            width={'100vw'}
        >
            <Box>
                <Image alt="Logo da Fullstacker" src={logo}/>
                <Link href='/' className={style.links}>
                    {'<Home />'}
                </Link>
                <Link href='/' className={style.links}>
                    {'<Javascript />'}
                </Link>
                <Link href='/' className={style.links}>
                    {'<Sobre />'}
                </Link>
            </Box>           
        </Box>
    ) 
}