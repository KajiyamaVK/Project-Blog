import Head from 'next/head';
import { useEffect, useRef } from 'react';
import SocialMediaBar from '@/components/Navigation/BottomBars/SocialMediaBar';
import ContactBar from '../components/Navigation/BottomBars/ContactBar';
import { Raleway } from 'next/font/google';
import Homepage from '../pages/Homepage';
import Aboutme from '../pages/Aboutme';
import WorkExperience from '../pages/WorkExperience';
import LastBar from '../components/LastBar';
import MetaTags from '@/components/MetaTags';

const font = Raleway({ subsets: ['latin'], weights: [400, 500, 700] });

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
    <div className={font.className}>
      <Head>
        <title>Victor Kajiyama</title>
        <MetaTags />
        <link rel="icon" href="/imgs/logo.ico" />
      </Head>

      <div className="mx-fluid-2 flex flex-col justify-center overflow-hidden ">
        <div className="relative opacity-0 " ref={HomepageRef}>
          <Homepage />
        </div>

        <div className="relative opacity-0" ref={AboutMeRef}>
          <Aboutme />
        </div>

        <div className="relative opacity-0" ref={ExperienceRef}>
          <WorkExperience />
        </div>
        <div className="h-96"></div>
      </div>
      <SocialMediaBar />
      <ContactBar />
      <LastBar />
    </div>
  );
}
