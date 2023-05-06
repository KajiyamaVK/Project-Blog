import Props from './interface';
import Image from 'next/image';
import { ReactNode, useState } from 'react';

export default function Timeline(props: Props) {
  const [isHovering, setIsHovered] = useState(false);

  const lineColor =
    props.isCurrent === true ? 'after:bg-gray-100' : 'after:bg-sky-400';

  const LastlineColor =
    props.isLast === true ? 'before:bg-gray-100' : '';

  const imgSrc = `/imgs/Logos_Empresas/${props.image}.png`;
  const descLineSide =
    props.index === 0 || props.index % 2 === 0
      ? 'after:left-5 lg:after:left-10 lg:after:w-20'
      : 'after:right-5 lg:after:right-10 lg:after:w-20';

  const descSide =
    props.index === 0 || props.index % 2 === 0
      ? 'left-5 lg:left-80 lg:w-20'
      : 'right-80 w-20';

  const dateSide =
    props.index === 0 || props.index % 2 === 0 ? '-right-3 bottom-0' : 'left-8';

  const imgSide =
    props.index === 0 || props.index % 2 === 0
      ? 'left-12 lg:left-48'
      : 'right-12 lg:right-48';

  const descLineClass = `after:block after:w-5 after:h-[1px] after:top-1 after:bg-gray-100 ${descLineSide}`;
  const containerClass = `absolute left-[48.2%] top-20 z-10 flex   h-3 w-3 after:absolute  sm:left-[48.7%] lg:left-[49.2%] xl:left-[49.5%] ${descLineClass}`;
  const lineClass = `w-full after:absolute after:top-3 after:left-1/2 after:block after:h-20 after:w-0.5 ${lineColor}`;
  const lastLineClass = `w-full before:absolute before:top-20 before:left-1/2 before:block before:h-20 before:w-0.5 ${LastlineColor}`;
  const circleFlashEffect = `absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-100 opacity-75 `;
  const milestoneSecondPart = `relative inline-flex h-3 w-3 rounded-full  bg-sky-400`;

  const idDesc = `desc-${props.index}`;

  return (
    <div className="relative mt-20 flex flex-col">
      <div className={`${lineClass} ${lastLineClass}`}>
        <span className={containerClass}>
          {props.isCurrent ? (
            <span className={circleFlashEffect}></span>
          ) : (
            <></>
          )}
          <span className={milestoneSecondPart}></span>
          <Image
            src={imgSrc}
            alt={props.image}
            width={100}
            height={50}
            className={`absolute ${imgSide} -top-3 max-w-none cursor-pointer`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
          <p className={`absolute w-36 text-xs text-gray-100 ${dateSide}`}>
            {props.date}
          </p>
          {props.children ? (
            <div
              className={`absolute hidden ${
                isHovering ? 'lg:block' : ''
              } ${descSide} mt-2 min-w-[250px] bg-gray-100 px-3 py-3 text-sm shadow-lg shadow-black`}
              id={idDesc}
            >
              {props.children}
            </div>
          ) : (
            <></>
          )}
        </span>
      </div>
    </div>
  );
}
