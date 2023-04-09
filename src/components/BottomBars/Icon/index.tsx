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
  let classes: string = 'mb-2 cursor-pointer  text-gray-100 hover:text-green-400 transition-colors duration-300 ';
  switch (props.iconName) {
    case 'github':
      icon = (
        <Link href="https://github.com/KajiyamaVK/">
          <FiGithub className={classes} />
        </Link>
      );
      break;
    case 'linkedin':
      icon = (
        <Link href="https://www.linkedin.com/in/victor-kajiyama/">
          <FiLinkedin className={classes} />
        </Link>
      );
      break;
    case 'whatsapp':
      icon = (
        <Link href="https://wa.me/+5511988269888">
          <BsWhatsapp className={classes} />
        </Link>
      );
      break;
    case 'email':
      icon = (
        <Link href="mailto:victor.kajiyama@gmail.com">
          <HiOutlineMail className={classes} />
        </Link>
      );
      break;
    default:
      icon = <div></div>;
  }
  return icon;
}
