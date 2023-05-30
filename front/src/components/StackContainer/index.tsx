import Image, { StaticImageData } from 'next/image';

interface IStackContainer {
  alt: string;
  src: StaticImageData;
  hexColor: string;
}

export default function StackContainer({
  alt,
  src,
  hexColor,
}: IStackContainer) {
  return (
    <div className="m-2 inline-block rounded-lg  shadow-xl drop-shadow-xl ">
      <Image height={45} width={45} src={src} alt={alt} />
    </div>
  );
}
