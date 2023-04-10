import Link from 'next/link';
import Image from 'next/image';
import foto from '../../../public/imgs/foto.jpg';
import ListWithTitle from '@/components/ListWithTitle';

export default function Aboutme() {


  return (
    <div id="Aboutme" className="mt-28 w-full xl:mt-0">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-green-100 after:block after:h-0.5 after:w-3/4 after:bg-green-100 md:after:w-1/4">
          Timeline de Experiência
        </h2>
        <div className="relative mx-0 flex flex-col justify-center border-2 py-10 sm:mx-5 sm:mt-10 sm:px-10">
          <p className="text-align-left relative w-full text-sm text-green-100 ">
            Algumas empresas que, com muito orgulho, já tive a oportunidade de
            trabalhar:
          </p>

          <div className="relative mt-10 flex flex-col">
            <div className="w-full bg-purple-300 after:absolute after:left-1/2 after:top-5 after:block after:h-5 after:w-0.5 after:bg-gray-100">
              <span className="absolute left-[48.2%] top-10 z-10 flex   h-3 w-3 after:absolute after:left-1/2  after:top-3 after:block after:h-5 after:w-0.5 after:bg-sky-400 sm:left-[48.7%] lg:left-[49.2%] xl:left-[49.5%]">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
