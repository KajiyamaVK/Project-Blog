import { iLink, LinksProps } from './interface';
import { scrollTo } from '@/Functions';
import { AiOutlineHome, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { MdWorkHistory, MdEmail } from 'react-icons/md';
import { GiRoundStar } from 'react-icons/gi';
import { RiWhatsappFill } from 'react-icons/ri';

const links: LinksProps[] = [
  {
    linkURL: 'Homepage',
    label: 'Home',
    icon: <AiOutlineHome />,
  },
  {
    linkURL: 'Aboutme',
    label: 'Sobre',
    icon: <BsFillInfoCircleFill />,
  },
  {
    linkURL: 'Experience',
    label: 'Experiência',
    icon: <MdWorkHistory />,
  },
  {
    linkURL: 'Qualities',
    label: 'Premissas de trabalho',
    icon: <GiRoundStar />,
  },
];

const socialLinks: LinksProps[] = [
  {
    linkURL: 'https://github.com/KajiyamaVK',
    label: 'Github',
    icon: <AiFillGithub />,
  },
  {
    linkURL: 'https://www.linkedin.com/in/victor-kajiyama',
    label: 'LinkedIn',
    icon: <AiFillLinkedin />,
  },
  {
    linkURL: 'https://wa.me/+551132306847',
    label: 'Whatsapp',
    icon: <RiWhatsappFill />,
  },
  {
    linkURL: 'mailto:victor.kajiyama@fullstacker.com.br',
    label: 'E-mail',
    icon: <MdEmail />,
  },
];

function LinkFormated(props: iLink) {
  if (props.isMobile)
    return (
      <div className="relative mx-2 h-6 duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-left after:scale-x-0 after:bg-slate-200 after:transition-transform after:ease-out hover:cursor-pointer hover:after:origin-bottom-left hover:after:scale-x-100">
        <p onClick={() => scrollTo(props.To)}>{props.linkLabel}</p>
      </div>
    );
  else
    return (
      <div className="relative mx-2 h-6 duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-left after:scale-x-0 after:bg-slate-200 after:transition-transform after:ease-out hover:cursor-pointer hover:after:origin-bottom-left hover:after:scale-x-100">
        <p onClick={() => scrollTo(props.To)}>{props.linkLabel}</p>
      </div>
    );
}

export { LinkFormated, links, socialLinks };
