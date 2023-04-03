import {iLink} from './interface'
import {Main, Number} from './style'
import { useState } from 'react';
import Link from 'next/link';

export default function Links(props:iLink){
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return(
        <Main>
            <Number>{props.number}.</Number>
            <span style={{color:'#ddd'}}>{props.link}</span>
        </Main>
    )
}