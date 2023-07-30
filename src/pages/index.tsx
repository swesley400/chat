import Image from 'next/image'
import { Inter } from 'next/font/google'
import { AiOutlineClose } from 'react-icons/ai'
import { VscSend } from 'react-icons/vsc'

import User from '@/components/User'
import Mensage from '@/components/Mensage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const closeViewMessage = (event: any) => {
    console.log("Fui Clicado pra fechar")
  }

  return (
    <div className='flex flex-col items-center w-full h-full mt-5'>
      <div className='w-full h-'>
        <div className='flex w-100 justify-between items-center'>
          <User imgUrl='/Foto.svg' nome='Cecilia Sassaki' status='Online' />
          <div className='mr-10 hover:cursor-pointer hover:bg-sendMessage' onClick={(e) => closeViewMessage(e)}>
            <AiOutlineClose />
          </div>
        </div>
      </div>
      <div className='w-full h-3/4'>
        {/*Horario*/}
        <div className='m-1 flex item-center justify-center'>
          <span>Hoje 11:30</span>
        </div>
        {/*Messages*/}
        <div className='w-full flex flex-col items-center justify-center'>
          <div className='w-full'>
            <Mensage typeMessage='recive' text='Sério? Me conta mais.' hourMessage="11:12" nameRemetent='Cecilia' />
          </div>
          <div className='w-full flex justify-end'>
            <Mensage typeMessage='send' text='Sério? Me conta mais.' hourMessage="11:12" />
          </div>
          <div className='w-full'>
            <Mensage typeMessage='recive' text='E se a gente fizesse um chat moderno e responsivo em apenas uma semana?' hourMessage="11:12" nameRemetent='Cecilia' />
          </div>
          <div className='w-full flex justify-end'>
            <Mensage typeMessage='send' text='#boraCodar! 🚀' hourMessage="11:12" />
          </div>
        </div>
        <div className='w-full fixed bottom-2 mt-1'>
          <div className='flex items-center relative'>
            <div className='absolute right-2.5'>
              <VscSend size={40}></VscSend>
            </div>
            <textarea className='w-full flex items-center bg-inputBackground text-left rounded-full p-5 resize-none'  />
          </div>
        </div>
      </div>
    </div>
  )
}
