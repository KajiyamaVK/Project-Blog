import { socialLinks } from '../../Links';
import { ReactNode } from 'react';

const icons = socialLinks
  .filter((link) => link.name === 'Whatsapp' || link.name === 'Email')
  .map((link, index) => (
    <a key={index} href={link.linkData.linkURL} target="_blank">
      <div className="mb-3 cursor-pointer text-3xl text-gray-100">
        {link.linkData.icon}
      </div>
    </a>
  ));

export default function ContactBar() {
  return (
    <div className="fixed bottom-0 right-9 z-50 hidden flex-col text-2xl after:mx-auto after:block after:h-20 after:w-0.5 after:bg-slate-100 md:flex">
      {icons}
    </div>
  );
}
