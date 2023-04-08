import logo from '../../../public/imgs/logo.png'
import { Button } from '@mui/material';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import LinkFormated from './Links';

export default function Topbar() {
    return (
        <div className='bg-gray-800 flex flex-row w-100 h-100 justify-between '>
            <Image src={logo} alt="Image" className='py-5 w-14 ml-6' />
            <div className='mt-10 mr-8 text-white space-x-4  hidden md:flex'>

                <LinkFormated link="#Page1" linkLabel='Início' />
                <LinkFormated link="#Page1" linkLabel='Sobre' />
                <LinkFormated link="#Page1" linkLabel='Experiência' />

                <Button variant='outlined' color='success' className='h-7'>
                    <AiOutlineCloudDownload style={{ marginRight: '10px' }} />
                    <Link href='https://1drv.ms/b/s!Aomjw2eFWi_Ii7J1Q5VmUKKstQM9cg?e=YwXt7S' target='_blank' style={{ textDecoration: 'none', color: "#2e7d32" }}>
                        Curriculo
                    </Link>
                </Button>
            </div>
            <FiMenu className='md:hidden text-3xl text-white mt-8 mr-8' />
        </div>
    )
}