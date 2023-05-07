import { socialLinks } from '../../Links';

const icons = socialLinks
  .filter((link) => link.name === 'Github' || link.name === 'LinkedIn')
  .map((link, index) => (
    <a key={index} href={link.linkData.linkURL} target="_blank">
      <div className="mb-3 cursor-pointer text-3xl text-gray-100">
        {link.linkData.icon}
      </div>
    </a>
  ));

export default function SocialMediaBar() {
  return (
    <div className="fixed bottom-0 left-9 z-50 hidden flex-col text-2xl after:mx-auto after:block after:h-20 after:w-0.5 after:bg-slate-100 md:flex">
      {icons}
    </div>
  );
}
