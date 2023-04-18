import Head from 'next/head';
import { useEffect, useRef } from 'react';
import Topbar from '../components/Topbar';
import SocialMediaBar from '../components/BottomBars/SocialMediaBar';
import ContactBar from '../components/BottomBars/ContactBar';
import { Rubik } from 'next/font/google';
import Homepage from '../pages/Homepage';
import Aboutme from '../pages/Aboutme';
import WorkExperience from '../pages/WorkExperience';
import LastBar from '../components/LastBar';
import Qualities from '../pages/Qualities';
import thumbnailImage from '../../public/imgs/ThumbImg.png';

const rubik = Rubik({ subsets: ['latin'], weights: [400, 500, 700] });

async function getStaticProps() {
  return {
    props: {
      thumbImg: thumbnailImage,
    },
  };
}

export default function Home() {
  const HomepageRef = useRef(null);
  const ExperienceRef = useRef(null);
  const AboutMeRef = useRef(null);
  const QualitiesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('animate-fade-in');
      });

      observer.observe(HomepageRef.current);
      observer.observe(AboutMeRef.current);
      observer.observe(ExperienceRef.current);

      return () => {
        observer.disconnect();
      };
    });

    if (HomepageRef.current) observer.observe(HomepageRef.current);
    if (ExperienceRef.current) observer.observe(ExperienceRef.current);
    if (AboutMeRef.current) observer.observe(AboutMeRef.current);
    if (QualitiesRef.current) observer.observe(QualitiesRef.current);
  }, []);

  return (
    <div className={rubik.className}>
      <Head>
        <title>Victor Kajiyama</title>
        {/* Microsoft Meta Tags */}
        <meta name="msapplication-TileColor" content="#ffffff" />

        {/* Facebook and Whatsapp Metatags */}
        {/* DIsplay site name, title and description */}
        <meta property="og:site_name" content="Victor Kajiyama - Fullstacker" />
        <meta property="og:title" content="Seu website por BAIXO CUSTO" />
        <meta
          property="og:description"
          content="Sua ideia + meu portfolio = preço baixo"
        />

        {/* Image to display in the thumbnails */}
        <meta property="og:image" itemProp="image" content={thumbImg} />
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/png" />

        {/* Any size bigger than 300px will not work on Whatsapp */}
        {/* <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" /> */}

        {/* URL to visit when clicking on the thumbnail */}
        <meta property="og:url" content="https://fullstacker.com.br" />

        <meta
          name="description"
          content="Site criado para portfolio de Victor Koiti Kajiyama"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/imgs/logo.ico" />
      </Head>
      <Topbar />
      <div className="mx-fluid-2 flex flex-col justify-center overflow-hidden">
        <div className="relative opacity-0 " ref={HomepageRef}>
          <Homepage />
        </div>

        <div className="relative opacity-0" ref={AboutMeRef}>
          <Aboutme />
        </div>

        <div className="relative opacity-0" ref={ExperienceRef}>
          <WorkExperience />
        </div>

        <div className="relative opacity-0" ref={QualitiesRef}>
          <Qualities />
        </div>
        <div className="h-96"></div>
      </div>
      <SocialMediaBar />
      <ContactBar />
      <LastBar />
    </div>
  );
}
