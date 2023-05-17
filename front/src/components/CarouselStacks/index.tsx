import { Carousel } from 'react-responsive-carousel';
import StackContainer from '@/components/StackContainer';
import dotnetIcon from '@@/imgs/Stacks/dotnet.png';
import oracleIcon from '@@/imgs/Stacks/oracle.png';
import sqlServerIcon from '@@/imgs/Stacks/sqlServer.png';
import htmlIcon from '@@/imgs/Stacks/html.png';
import cssIcon from '@@/imgs/Stacks/css.png';
import javascriptIcon from '@@/imgs/Stacks/javascript.jpg';
import typescriptIcon from '@@/imgs/Stacks/typescript.jpg';
import reactIcon from '@@/imgs/Stacks/react.png';
import nextjsIcon from '@@/imgs/Stacks/nextjs.png';
import tailwindIcon from '@@/imgs/Stacks/tailwind.jpg';
import styledComponentsIcon from '@@/imgs/Stacks/styledComponents.jpg';
import jestIcon from '@@/imgs/Stacks/jest.jpg';

export default function CaroulselStacks() {
  return (
    <div className="mx-auto w-full md:w-[40rem]">
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
        dynamicHeight={false} // Set dynamicHeight to true
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
                  background: '#ffffff',
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
                background: '#a0a0a0',
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
        <div className="flex flex-col py-16 text-left">
          <h1 className="mb-5 text-gray-100">LINGUAGENS</h1>
          <div className="flex gap-x-5 gap-y-5">
            <StackContainer
              src={dotnetIcon}
              alt="dotnetIcon"
              hexColor="#95c7ff"
            />
            <StackContainer
              src={javascriptIcon}
              alt="Icon React"
              hexColor="#f4e21a"
            />
            <StackContainer
              src={oracleIcon}
              alt="dotnetIcon"
              hexColor="#ffffff"
            />
            <StackContainer
              src={sqlServerIcon}
              alt="dotnetIcon"
              hexColor="#ffffff"
            />
          </div>
        </div>

        <div className="flex flex-col py-16 text-left">
          <h1 className="mb-5 text-gray-100 md:hidden">POWER-UPS IN CODES</h1>
          <h1 className=" mb-5 hidden text-gray-100 md:block">POWER-UPS</h1>

          <div className="flex flex-wrap gap-x-5 gap-y-5">
            <div className="flex flex-wrap gap-x-5 gap-y-5">
              <StackContainer
                src={nextjsIcon}
                alt="dotnetIcon"
                hexColor="#95c7ff"
              />
              <StackContainer
                src={reactIcon}
                alt="Icon React"
                hexColor="#000000"
              />
              <StackContainer
                src={jestIcon}
                alt="dotnetIcon"
                hexColor="#98747e"
              />
              <StackContainer
                src={typescriptIcon}
                alt="dotnetIcon"
                hexColor="#0179d1"
              />
            </div>

            <div>
              <div className="hidden flex-wrap gap-x-5 gap-y-5 md:flex">
                <StackContainer
                  src={htmlIcon}
                  alt="dotnetIcon"
                  hexColor="#ffffff"
                />
                <StackContainer
                  src={cssIcon}
                  alt="Icon React"
                  hexColor="#ffffff"
                />
                <StackContainer
                  src={styledComponentsIcon}
                  alt="dotnetIcon"
                  hexColor="#ffffff"
                />
                <StackContainer
                  src={tailwindIcon}
                  alt="dotnetIcon"
                  hexColor="#ffffff"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col py-16 text-left md:hidden">
            <h1 className="mb-5 text-gray-100">POWER-UPS IN UI</h1>
            <div>
              <div className="flex flex-wrap gap-x-5 gap-y-5">
                <StackContainer
                  src={htmlIcon}
                  alt="dotnetIcon"
                  hexColor="#ffffff"
                />
                <StackContainer
                  src={cssIcon}
                  alt="Icon React"
                  hexColor="#ffffff"
                />
                <StackContainer
                  src={styledComponentsIcon}
                  alt="dotnetIcon"
                  hexColor="#ffffff"
                />
                <StackContainer
                  src={tailwindIcon}
                  alt="dotnetIcon"
                  hexColor="#ffffff"
                />
              </div>
            </div>
          </div>

          <div className="hidden py-16 text-left md:block">
            <div className="mx-auto w-[40rem]">
              <p className="text-gray-100">
                <i>
                  &quot;A verdadeira sabedoria não está em evitar a tecnologia,
                  mas em aprender a usá-la de maneira sábia.&quot;
                </i>
              </p>
              <div className="text-right text-gray-100">
                <p>
                  <b>Don Tapscott</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
