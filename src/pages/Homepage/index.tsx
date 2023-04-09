import { Rubik } from 'next/font/google';

// Import Google font
const rubik = Rubik({ subsets: ['latin'] });

export default function MainPage() {
  return (
    <div id="Page1" className='mt-40 h-screen'>
      <p className="text-green-600">Olá! Meu nome é</p>
      <h1 className=" text-fluid-2 text-green-100">Victor Kajiyama.</h1>
      <h1 className="text-fluid-1 text-green-400">Sou um arquiteto da web</h1>
      <p className="max-w-lg text-green-100 text-sm sm:text-">
        Desenvolvo sites e sistemas para a web com foco principal em criar
        interfaces que geram uma experiência prática e moderna - sempre mantendo
        metodologias de arquitetura atuais e funcionais.
      </p>
    </div>
  );
}
