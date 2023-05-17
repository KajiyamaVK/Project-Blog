import Link from 'next/link';
import Image from 'next/image';
import foto from '../../../public/imgs/foto.jpg';
import CarouselComponent from '@/components/Carousel';
import CaroulselStacks from '@/components/CarouselStacks';
import { differentialsCarousel } from '@/components/Carousel/data';
import { Paper } from '@mui/material';

export default function Aboutme() {
  return (
    <div id="Aboutme" className="mt-28 w-full xl:mt-20">
      <div className="300 relative mx-auto max-w-5xl">
        <div className="w-fit">
          <h1 className="text-green-100 after:block after:h-0.5 after:w-3/4 after:bg-green-100 md:after:w-full">
            SOBRE MIM
          </h1>
        </div>
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
            chamado Isaac, e de 3 garotões de quatro patas. Cristão de berço,
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
          </p>
          <div className=" absolute right-5 top-16 hidden h-48 w-36 border-2 border-solid  border-green-100 pb-3 pr-3 sm:block "></div>
        </div>
        <CaroulselStacks />
        <div className=" mx-2/3 mx-0 mt-10 flex w-full flex-wrap justify-evenly gap-y-5">
          <Paper className="w-[400px] rounded-lg bg-gray-100" elevation={10}>
            <CarouselComponent data={differentialsCarousel} />
          </Paper>

          {/* <Paper
            className="elevation={4} w-[400px] rounded-lg bg-gray-100"
            elevation={10}
          >
            <CarouselComponent
              mainTitle={differentialsCarousel.mainTitle}
              data={differentialsCarousel.data}
            />
          </Paper> */}
        </div>
      </div>
    </div>
  );
}
