import Head from 'next/head';
import { useEffect, useRef } from 'react';
import Topbar from '../components/Topbar';
import SocialMediaBar from '../components/BottomBars/SocialMediaBar';
import ContactBar from '../components/BottomBars/ContactBar';
import { Rubik } from 'next/font/google';
import Homepage from '../pages/Homepage';
import Aboutme from '../pages/Aboutme';
import WorkExperience from '../pages/WorkExperience';

const rubik = Rubik({ subsets: ['latin'], weights: [400, 500, 700] });

export default function Home() {
  const HomepageRef = useRef(null);
  const ExperienceRef = useRef(null);
  const AboutMeRef = useRef(null);

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
  }, []);

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
      <div className="mx-fluid-2 flex flex-col justify-center">
        <div className="opacity-0 relative " ref={HomepageRef}>
          <Homepage />
        </div>

        <div className="opacity-0 relative" ref={AboutMeRef}>
          <Aboutme />
        </div>

        <div className="opacity-0 relative" ref={ExperienceRef}>
          <WorkExperience />
        </div>
        <div className='h-96'></div>
      </div>
      <SocialMediaBar />
      <ContactBar />
    </div>
  );
}
