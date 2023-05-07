import logo from '@@/imgs/logo.png';
import { Button } from '@mui/material';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import { LinkFormated, links } from '../Links';
import { iLinks, LinksProps } from '../Links/interface';
import DrawerComponent from './Drawer';

export default function Topbar() {
  return (
    <div className="w-100 h-100 sticky top-0 z-50 flex flex-row justify-between bg-gray-800">
      <Image src={logo} alt="Image" className="ml-6 w-14 py-5" />
      <div className="absolute right-0 mr-8 mt-10 hidden space-x-4 text-white md:flex">
        {links.map((link: iLinks, index: number) => (
          <LinkFormated
            key={index}
            linkURL={link.linkData.linkURL}
            label={link.linkData.label}
          />
        ))}

        <Button
          variant="contained"
          color="success"
          className="h-7 bg-green-500"
        >
          <AiOutlineCloudDownload className="mr-1" />
          <a
            href="https://1drv.ms/b/s!Aomjw2eFWi_Ii7J1Q5VmUKKstQM9cg?e=YwXt7S"
            target="_blank"
            className="no-underline"
          >
            Curriculo
          </a>
        </Button>
      </div>
      {/* <FiMenu  /> */}
      <DrawerComponent />
    </div>
  );
}
