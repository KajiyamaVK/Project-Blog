import { ReactNode } from 'react';

// interface iLink {
//   linkLabel: string;
//   To: string;
//   isMobile?: boolean;
// }

interface LinksProps {
  label: string;
  linkURL: string;
  icon?: ReactNode;
  isMobile?: boolean;
}

interface iLinks {
  name: string;
  linkData: LinksProps;
}

export type { iLinks, LinksProps };
