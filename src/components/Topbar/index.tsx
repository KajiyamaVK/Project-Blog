import logo from '../../../public/imgs/logo.png';
import { Button } from '@mui/material';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import LinkFormated from './Links';
import { link } from 'fs';
import { LinksProps } from './interface';

export default function Topbar() {
const links : LinksProps[] = [
    {
      linkURL: '#Page1',
      label: 'Home'
    },
    {
      linkURL: '#Aboutme',
      label: 'Sobre'
    },
    {
      linkURL: '#Page3',
      label: "Experiência",
    },
  ];

  return (
    <div className="bg-gray-800 flex flex-row w-100 h-100 justify-between absolute top-0 sticky z-50">
      <Image src={logo} alt="Image" className="py-5 w-14 ml-6" />
      <div className="mt-10 mr-8 text-white space-x-4  hidden md:flex">
        
        {links.map((link: LinksProps, index: number) => (
          <LinkFormated key={index} linkURL={link.linkURL} linkLabel={link.label} />
        ))}
          
        

        <Button variant="contained" color="success" className="h-7 bg-green-500">

          <AiOutlineCloudDownload className="mr-1" />
          <Link
            href="https://1drv.ms/b/s!Aomjw2eFWi_Ii7J1Q5VmUKKstQM9cg?e=YwXt7S"
            target="_blank"
            className="no-underline"
          >
            Curriculo
          </Link>
        </Button>
      </div>
      <FiMenu className="md:hidden text-3xl text-white mt-8 mr-8" />
    </div>
  );
}
