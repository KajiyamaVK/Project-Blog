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
    <div
      className="inline-block rounded-lg p-2  shadow-xl drop-shadow-xl "
      style={{ backgroundColor: hexColor }}
    >
      <Image height={45} width={45} src={src} alt={alt} />
    </div>
  );
}
