import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import Link from 'next/link';
import { ReactElement } from 'react';

interface iIcon {
  iconName: string;
}

export default function Icon(props: iIcon): ReactElement {
  let icon;
  let classes: string =
    'mb-2 cursor-pointer  text-gray-100 hover:text-green-400 transition-colors duration-300 ';
  switch (props.iconName) {
    case 'github':
      icon = (
        <Link href="https://github.com/KajiyamaVK/" target="_blank">
          <FiGithub className={classes} />
        </Link>
      );
      break;
    case 'linkedin':
      icon = (
        <Link
          href="https://www.linkedin.com/in/victor-kajiyama/"
          target="_blank"
        >
          <FiLinkedin className={classes} />
        </Link>
      );
      break;
    case 'whatsapp':
      icon = (
        <Link href="https://wa.me/+551132306847" target="_blank">
          <BsWhatsapp className={classes} />
        </Link>
      );
      break;
    case 'email':
      icon = (
        <Link href="mailto:victor.kajiyama@fullstacker.com.br" target="_blank">
          <HiOutlineMail className={classes} />
        </Link>
      );
      break;
    default:
      icon = <div></div>;
  }
  return icon;
}
