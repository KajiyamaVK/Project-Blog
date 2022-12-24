import style from './stylesheet.module.css'
import dynamic from 'next/dynamic'
import { Button } from '@mui/material'
var Editor = dynamic(() => import('../../public/components/Editor'), {
    ssr: false
  })

export default function AdminPage(){

    
    
    return(
        <>
        <Editor />
        
        </>
    )
}