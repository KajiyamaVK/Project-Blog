import Link from 'next/link';
import Image from 'next/image';
import Timeline from '@/components/Timeline';
import dotnetImg from '/public/imgs/Stacks/dotnet.png';
import sqlServerImg from '/public/imgs/Stacks/mssqls.png';
import react from '/public/imgs/Stacks/react.png';
import phpImg from '/public/imgs/Stacks/php.png';
import javascriptImg from '/public/imgs/Stacks/javascript.jpg';
import oracleImg from '/public/imgs/Stacks/oracle.png';

export default function WorkExperience() {
  return (
    <div id="Experience" className="mt-28 w-full">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-green-100 after:block after:h-0.5 after:w-3/4 after:bg-green-100 md:after:w-1/4">
          Timeline de Experiência
        </h2>
        <div className="relative mx-0 flex flex-col justify-center border-2 py-10 sm:mx-5 sm:mt-10 sm:px-10">
          <p className="text-align-left relative w-full text-sm text-green-100 ">
            Algumas empresas que, com muito orgulho, já tive a oportunidade de
            trabalhar:
          </p>
          <p className="text-xs text-green-100">
            <i className="hidden lg:block">
              (Passe o mouse para mais informações)
            </i>
          </p>

          <Timeline
            index={0}
            image="sinqia"
            date="01/2023 - presente"
            isCurrent
          >
            Trabalhou como desenvolvedor fullstack na vertical de{' '}
            <b>consórcios</b>
            <p className="mt-3 text-xs">
              <i>Utiliza:</i>
            </p>
            <div className="flex justify-evenly rounded-s border-y-2 border-solid border-gray-300 p-2">
              <Image src={dotnetImg} alt="dotnet logo" width={45} height={45} />
              <Image
                src={sqlServerImg}
                alt="sqlserver logo"
                width={45}
                height={45}
              />
              <Image src={react} alt="React logo" width={45} height={45} />
            </div>
          </Timeline>

          <Timeline index={1} image="gtplan" date="10/2021 - 01/2023">
            Arquitetava e desenvolvia (Fullstack) os novas ferramentas da
            plataforma no módulo <b>B2B</b>.
            <p className="mt-3 text-xs">
              <i>Utilizou:</i>
            </p>
            <div className="flex justify-evenly rounded-s border-y-2 border-solid border-gray-300 p-2">
              <Image src={phpImg} alt="dotnet logo" width={45} height={45} />
              <Image
                src={oracleImg}
                alt="sqlserver logo"
                width={45}
                height={45}
              />
              <Image
                src={javascriptImg}
                alt="React logo"
                width={45}
                height={45}
              />
            </div>
          </Timeline>

          <Timeline index={2} image="linx" date="07/2012 - 12/2015">
            Trabalhou como desenvolvedor fullstack na vertical de{' '}
            <b>consórcios</b>
            <p className="mt-3 text-xs">
              <i>Utilizou:</i>
            </p>
            <div className="flex justify-evenly rounded-s border-y-2 border-solid border-gray-300 p-2">
              <Image src={phpImg} alt="dotnet logo" width={45} height={45} />
              <Image
                src={oracleImg}
                alt="sqlserver logo"
                width={45}
                height={45}
              />
            </div>
          </Timeline>
        </div>
      </div>
    </div>
  );
}
