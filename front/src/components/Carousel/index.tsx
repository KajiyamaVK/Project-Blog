import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { iCarouselProps } from './interface';
import Image from 'next/image';
// A Carousel component that displays a div containing two other divs side by side. The first one containing a logo and the second containing two more divs inside, one on top of the other. The first one containing a title and the second one containing a description.

// The component receives an array of objects containing the following properties: logo, title and description.

export default function CarouselComponent(props: iCarouselProps) {
  return (
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
              background: '#FFFFFF',
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
      {props.data.map((item, index) => (
        <div key={index} className="flex flex-row items-center justify-between">
          <Image src={item.logo} alt="logo" width={100} height={100} />
          <div className="carousel-item-texts">
            <div className="carousel-item-texts-title">
              <h3>{item.title}</h3>
            </div>
            <div className="carousel-item-texts-description">
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
