import { iLink } from './interface'
import { LinkLabel, LinkComponent } from './style'


export default function LinkFormated(props: iLink) {
    return (

        <div className="mx-2 h-6 relative hover:cursor-pointer after:absolute after:w-full after:h-0.5 after:bg-slate-200 after:bottom-0 after:left-0 after:origin-bottom-left after:scale-x-0 after:transition-transform after:ease-out duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left" >
            <LinkComponent href={props.link}>
                <LinkLabel className="inline-block">{props.linkLabel}</LinkLabel>
            </LinkComponent>
        </div>

    )
}