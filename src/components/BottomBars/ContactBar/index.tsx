import Icon from "../Icon"

export default function ContactBar() {
    return (
        <div className="absolute bottom-0 right-9 hidden flex-col text-2xl after:mx-auto after:block after:h-20 after:w-0.5 after:bg-slate-100 md:flex">
            <Icon iconName="whatsapp"/>
            <Icon iconName="email"/>
        </div>
    )
};