import Icon from '../Icon';

export default function SocialMediaBar() {
  return (
    <div className="fixed bottom-0 left-9 hidden flex-col text-2xl after:mx-auto after:block after:h-20 after:w-0.5 after:bg-slate-100 md:flex">
      <Icon iconName="github" />
      <Icon iconName="linkedin" />
    </div>
  );
}
