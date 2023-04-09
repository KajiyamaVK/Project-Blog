import { iLink } from './interface';
import Link from 'next/link';

export default function LinkFormated(props: iLink) {
  return (
    <div className="relative mx-2 h-6 duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-left after:scale-x-0 after:bg-slate-200 after:transition-transform after:ease-out hover:cursor-pointer hover:after:origin-bottom-left hover:after:scale-x-100">
      <Link href={props.link}>{props.linkLabel}</Link>
    </div>
  );
}
