import Link from 'next/link';
import Image from 'next/image';
import foto from '../../../public/imgs/foto.jpg';

export default function AboutMe() {
  return (
    <div className="w-full">
      <h2 className="text-green-100 after:block after:h-0.5 after:w-2/4 after:bg-green-100">
        Sobre Mim
      </h2>
      <div className="mx-auto mt-20 flex w-4/5 justify-center border-2 border-solid border-green-100 px-20 py-10">
        <p className="text-align-left w-full text-sm text-green-100 ">
          <div className="relative">
            <Image
              src={foto}
              alt="Foto"
              className="relative z-10 float-right mb-10 ml-5 hidden sm:block"
            />
            <div className=" absolute -right-3 top-5 h-48 w-36 border-2 border-solid border-green-100  pb-3 pr-3 hidden sm:block"></div>
          </div>
          Olá, meu caro(a)! Meu nome é Victor Kajiyama, pai de um lindo menino
          chamado Isaac, e de 3 gartotões de quatro patas. Cristão de berço, sou
          casado com a Mariana. <br />
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
          Sou apaixonado por programação e tecnologia! Adoro estar sempre a par
          das coisas novas que estão em hype na boca dos Devs de plantão.
          <br /> <br />
          Atualmente trabalho com: <br />
          <br />
          <div className="flex flex-wrap justify-between">
            <ul className="mb-10 list-inside list-disc">
              <h2 className="my-5 after:relative after:top-2 after:block after:h-0.5 after:w-3/4 after:bg-green-100">
                Linguagens
              </h2>
              <li>Javascript (NextJS / Typescript)</li>
              <li>.NET Core</li>
              <li>SQL (Oracle PL-SQL / SQL Server T-SQL)</li>
              <li>HTML</li>
              <li>CSS (Styled-Components / Tailwind / CSS Modules)</li>
            </ul>
            <ul className="list-inside list-disc">
              <h2 className="mb-5 mt-10 leading-8 after:relative after:top-2 after:block after:h-0.5 after:w-full after:bg-green-100 lg:mt-3">
                Metodologias e Frameworks
              </h2>
              <li>Git</li>
              <li>CD & CI</li>
              <li>Testes (Jest & xUnit)</li>
              <li>Metodologias Ágeis</li>
              <li>Clean Code</li>
              <li>SOLID</li>
            </ul>
          </div>
        </p>
      </div>
    </div>
  );
}
