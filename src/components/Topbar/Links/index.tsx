import { iLink } from './interface'
import { Main, Number, LinkLabel, LinkComponent } from './style'


export default function LinkFormated(props: iLink) {
    return (
        // <Main>
        //     <LinkComponent href={props.link}>
        //         <Number>{props.number}.</Number>
        //         <LinkLabel>{props.linkLabel}</LinkLabel>
        //     </LinkComponent>
        // </Main>

        <div className="mx-20 relative hover:cursor-pointer hover:after:scale-x-100">
            <LinkComponent href={props.link}>
                <LinkLabel className="inline-block">{props.linkLabel}</LinkLabel>
            </LinkComponent>
            <div className="absolute w-full h-2 bg-gray-400 bottom-0 left-0 transform origin-bottom-left scale-x-0 transition duration-300 ease-out hover:scale-x-100"></div>
        </div>

    )
}