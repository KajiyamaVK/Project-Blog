import {iLink} from './interface'
import {Main, Number, LinkLabel} from './style'

export default function LinkFormated(props:iLink){
    return(
        <Main>
            <Number>{props.number}.</Number>
            <LinkLabel>{props.link}</LinkLabel>
        </Main>
    )
}