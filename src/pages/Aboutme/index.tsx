import Link from 'next/link';
import Image from 'next/image';
import foto from '../../../public/imgs/foto.jpg';
import ListWithTitle from '@/components/ListWithTitle';

export default function Aboutme() {
  const languagesList = [
    'Javascript (NextJS / Typescript)',
    '.NET Core',
    'SQL (Oracle PL-SQL / SQL Server T-SQL)',
    'HTML',
    'CSS (Styled-Components / Tailwind / CSS Modules)',
  ];
  const methodologiesList = [
    'Git',
    'CD & CI',
    'Testes (Jest & xUnit)',
    'Metodologias Ágeis',
    'Clean Code',
    'SOLID',
  ];

  return (
    <div id="Aboutme" className="mt-28 w-full xl:mt-0">
      <div className="relative mx-auto max-w-5xl">
        <h2 className="text-green-100 after:block after:h-0.5 after:w-3/4 after:bg-green-100 md:after:w-1/4">
          Sobre Mim
        </h2>
        <Image
          src={foto}
          alt="Foto"
          className=" 
            mx-auto
            my-10 
            shadow-lg
            shadow-black 
            sm:block 
            md:hidden"
        />
        <div
          className=" absolute 
                      left-20
                      top-28
                      -z-10
                      h-48
                      w-36 
                      justify-center  
                      border-2 
                    border-solid 
                      border-green-100
                      px-10
                      md:hidden"
        ></div>

        <div
          className="relative 
                     mx-0 
                     flex 
                     flex-col 
                     justify-center 
                     border-2 
                     py-10 
                     sm:mx-5 
                     sm:mt-10 
                     sm:border-solid 
                     sm:border-green-100 
                     sm:px-10"
        >
          <p className="text-align-left relative w-full text-sm text-green-100 ">
            <Image
              src={foto}
              alt="Foto"
              className="relative z-10 float-right mb-10 ml-5 hidden sm:block "
            />
            Olá, meu caro(a)! Meu nome é Victor Kajiyama, pai de um lindo menino
            chamado Isaac, e de 3 gartotões de quatro patas. Cristão de berço,
            sou casado com a Mariana. <br />
            <br />
            Sou desenvolvedor desde 2015. Até chegar lá percorri uma suada
            caminhada na maioria dos cargos possíveis em uma empresa de serviços
            de sistemas - implantação, treinamento, consultoria, Suporte, e
            finalmente, desenvolvimento. <br />
            <br />
            Atualmente, trabalho como desenvolvedor fullstack na empresa{' '}
            <Link href="https://sinqia.com.br" className="text-white underline">
              Sinqia
            </Link>
            .
            <br /> <br />
            Sou apaixonado por programação e tecnologia! Adoro estar sempre a
            par das coisas novas que estão em hype na boca dos Devs de plantão.
            <br /> <br />
            Atualmente trabalho com: <br />
            <br />
          </p>
          <div className=" absolute right-5 top-16 hidden h-48 w-36 border-2 border-solid  border-green-100 pb-3 pr-3 sm:block "></div>
          <div className="flex flex-wrap justify-between">
            <ListWithTitle title="Linguagens" list={languagesList} />
            <ListWithTitle title="Metodologias" list={methodologiesList} />
          </div>
        </div>
      </div>
    </div>
  );
}
