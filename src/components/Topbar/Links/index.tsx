import { iLink } from './interface'
import { Main, Number, LinkLabel, LinkComponent } from './style'


export default function LinkFormated(props: iLink) {
    return (
        <Main>
            <LinkComponent href={props.link}>
                <Number>{props.number}.</Number>
                <LinkLabel>{props.linkLabel}</LinkLabel>
            </LinkComponent>
        </Main>
    )
}