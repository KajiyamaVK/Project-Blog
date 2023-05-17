import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { iCarouselProps } from './interface';
import Image from 'next/image';

/**
 * @name CarouselComponent
 * @description Componente de carrossel
 * @param {iCarouselProps[]} data Dados do carrossel
 * @param {string} mainTitle Título principal do carrossel
 */

export default function CarouselComponent({ data }: iCarouselProps) {
  return (
    <div>
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        transitionTime={500}
        stopOnHover={false}
        swipeable={true}
        dynamicHeight={false}
        emulateTouch={true}
        useKeyboardArrows={false}
        centerMode={false}
        thumbWidth={100}
        selectedItem={0}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                style={{
                  background: '#000000',
                  width: '10px',
                  height: '10px',
                  margin: '0 5px',
                  display: 'inline-block',
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            );
          }
          return (
            <li
              style={{
                background: '#6b6b6b',
                width: '10px',
                height: '10px',
                margin: '0 5px',
                display: 'inline-block',
                borderRadius: '50%',
                cursor: 'pointer',
              }}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="margin-0 mb-3 flex h-full flex-row items-center justify-center"
          >
            <Image
              src={item.logo}
              alt="logo"
              width={100}
              height={100}
              className="mx-4 mb-5"
            />

            <div className="carousel-item-texts mx-2 mb-5 mt-3  text-left">
              <div className="carousel-item-texts-title mb-3 w-fit border-b border-solid border-gray-900 px-1 ">
                <h2 className="italic">
                  <b>{item.title}</b>
                </h2>
              </div>
              <div className="carousel-item-texts-description">
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
