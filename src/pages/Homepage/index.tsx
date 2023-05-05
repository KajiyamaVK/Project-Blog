import { Rubik } from 'next/font/google';

// Import Google font
const rubik = Rubik({ subsets: ['latin'] });

export default function MainPage() {
  return (
    <div className="flex h-[90vh] items-center">
      <div id="Homepage" className="small:h-screen my-auto sm:mt-40">
        <p className="text-green-600">Olá! Meu nome é</p>
        <div className=" from-white to-green-950 p-10 before:absolute before:left-0  before:block before:h-96 before:w-0.5 before:bg-black    before:bg-gradient-to-br lg:before:h-72">
          <h1 className=" text-fluid-2 text-green-100">Victor Kajiyama.</h1>
          <h1 className="text-fluid-1 text-green-400">
            Sou um arquiteto da web
          </h1>
          <p className="sm:text- max-w-lg text-sm text-green-100">
            Desenvolvo sites e sistemas para a web com foco principal em criar
            interfaces que geram uma experiência prática e moderna - sempre
            mantendo metodologias de arquitetura atuais e funcionais.
          </p>
        </div>
      </div>
    </div>
  );
}
