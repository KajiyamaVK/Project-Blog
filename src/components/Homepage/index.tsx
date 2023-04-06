import { Main, Greeting, Name, BigDescription, SmallDescription } from "./style"
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

export default function MainPage() {
    return (
        <Main>
            <Greeting>Saudações! Meu nome é</Greeting>
            <Name>Victor Kajiyama.</Name>
            <BigDescription>Sou um arquiteto da web</BigDescription>
            <SmallDescription>Sou um desenvolvedor de sites e sistemas para a web. Meu foco é criar interfaces que gerem uma experiência prática e moderna ao usuário - sempre
                mantendo metodologias de arquitetura atuais e funcionais. </SmallDescription>
        </Main>
    )
}