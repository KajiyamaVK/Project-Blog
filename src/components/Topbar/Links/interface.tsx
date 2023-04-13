import { ReactNode } from 'react';

interface iLink {
  linkLabel: string;
  To: string;
  isMobile?: boolean;
}

interface LinksProps {
  label: string;
  linkURL: string;
  icon?: ReactNode;
}

export type {};

export type { iLink, LinksProps };
