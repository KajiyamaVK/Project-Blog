import { Greeting, Name, BigDescription, SmallDescription } from "./style"
import { Rubik } from 'next/font/google'

// Import Google font
const rubik = Rubik({ subsets: ['latin'] })

export default function MainPage() {
    return (
        <div id='Page1'>
            <Greeting>Olá! Meu nome é</Greeting>
            <Name>Victor Kajiyama.</Name>
            <BigDescription>Sou um arquiteto da web</BigDescription>
            <SmallDescription>Desenvolvedor de sites e sistemas para a web com foco principal em criar interfaces que geram uma experiência prática e moderna ao usuário - sempre
                mantendo metodologias de arquitetura atuais e funcionais. </SmallDescription>
        </div>
    )
}

