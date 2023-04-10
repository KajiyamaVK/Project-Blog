import Props from './interface';
import Image from 'next/image';
import teste from '/public/imgs/teste.jpg';

export default function Timeline(props: Props) {
  const lineColor =
    props.isCurrent === true ? 'after:bg-gray-100' : 'after:bg-sky-400';

  const imgSrc = `/imgs/${props.image}.png`;

  const descSide =
    props.index === 0 || props.index % 2 === 0
      ? 'after:left-10'
      : 'after:right-10';

  const imgSide =
    props.index === 0 || props.index % 2 === 0 ? 'left-32' : 'right-32';

  const descLineClass = `after:block after:w-5 after:h-[1px] after:top-1 after:bg-gray-100 ${descSide}`;

  const containerClass = `absolute left-[48.2%] top-20 z-10 flex   h-3 w-3 after:absolute  sm:left-[48.7%] lg:left-[49.2%] xl:left-[49.5%] ${descLineClass}`;
  const lineClass = `w-full after:absolute after:top-3 after:left-1/2 after:block after:h-20 after:w-0.5 ${lineColor}`;
  const circleFlashEffect = `absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75 `;
  const milestoneSecondPart = `relative inline-flex h-3 w-3 rounded-full  bg-sky-400`;

  return (
    <div className="relative mt-20 flex flex-col">
      <div className={lineClass}>
        <span className={containerClass}>
          {props.isCurrent ? (
            <span className={circleFlashEffect}></span>
          ) : (
            <></>
          )}
          <span className={milestoneSecondPart}></span>
          <Image
            src={imgSrc}
            alt="testew"
            width={100}
            height={50}
            className={`absolute ${imgSide} -top-5 max-w-none`}
          />
        </span>
      </div>
    </div>
  );
}
