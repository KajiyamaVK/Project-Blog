import Head from 'next/head';
import Topbar from '../components/Topbar';
import SocialMediaBar from '../components/BottomBars/SocialMediaBar';
import ContactBar from '../components/BottomBars/ContactBar';
import { Rubik } from 'next/font/google';
import Homepage from '../pages/Homepage';
import AboutMe from '../pages/AboutMe';

const rubik = Rubik({ subsets: ['latin'], weights: [400, 500, 700] });

export default function Home() {
  return (
    <div className={rubik.className}>
      <Head>
        <title>Victor Kajiyama</title>
        <meta
          name="description"
          content="Site criado para portfolio de Victor Koiti Kajiyama"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/imgs/logo.ico" />
      </Head>
      <Topbar />
      <div className="mx-fluid-2 flex items-start justify-center scroll-smooth flex-col">
        <Homepage />
        <AboutMe />
      </div>
      <SocialMediaBar />
      <ContactBar />
    </div>
  );
}
