import Props from './interface';
import Image from 'next/image';

export default function Card(props: Props) {
  const imgSrc = `/imgs/cards/${props.image}.png`;

  return (
    <div className="flex">
      <div className="rounder-tl-sm delay-[0.2s]; relative flex flex-col overflow-hidden rounded-bl-lg rounded-br-sm rounded-tr-lg bg-green-700 transition-transform duration-[0.1s] ease-[linear,box-shadow]">
        {/* Image */}
        <div className="">
          <Image
            src={imgSrc}
            alt={props.image}
            className="block h-auto w-full object-cover"
          />
        </div>{' '}
        {/* Title */}
        <div className="absolute right-0 top-0 z-[1] h-auto w-[90%] origin-[left_top] rotate-[-3.3deg] animate-[0s_0s_fly-in_0_reverse_both] overflow-hidden rounded-[5px_0_0_5px] bg-green-600 p-2 text-[1.325rem] font-semibold text-white">
          {props.title}
        </div>
        <div className="card__content">{props.content}</div>
      </div>
      {props.children}
    </div>
  );
}
