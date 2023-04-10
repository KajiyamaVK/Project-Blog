import Link from 'next/link';
import Timeline from '@/components/Timeline';

export default function Aboutme() {
  return (
    <div id="#Experience" className="mt-28 w-full xl:mt-0">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-green-100 after:block after:h-0.5 after:w-3/4 after:bg-green-100 md:after:w-1/4">
          Timeline de Experiência
        </h2>
        <div className="relative mx-0 flex flex-col justify-center border-2 py-10 sm:mx-5 sm:mt-10 sm:px-10">
          <p className="text-align-left relative w-full text-sm text-green-100 ">
            Algumas empresas que, com muito orgulho, já tive a oportunidade de
            trabalhar:
          </p>

          <Timeline isCurrent image="sinqia" index={0}></Timeline>
          <Timeline index={1} image="gtplan"></Timeline>
          <Timeline index={2} image="linx"></Timeline>
        </div>
      </div>
    </div>
  );
}
