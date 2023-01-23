
import logoImage from '../assets/logo.svg'
import { Plus, X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react'
import { NewHabitForm } from './NewHabitsForm';



export function Header() {

  return (
    <div className='w-full max-w-4xl mx-auto flex items-center'>
      {/* <img src={logoImage} alt="Habits" /> */}

      <Dialog.Root>
      
          <Dialog.Trigger
            type='button'
            className='border text-blue-800 border-blue-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-background'
          >
            <Plus size={20} className="text-blue-500" />
            Novo hábito
          </Dialog.Trigger>
 


        <Dialog.Portal>
          <Dialog.Overlay className='w-screen h-screen bg-black/80 fixed inset-0' />
          <Dialog.Content className='absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <Dialog.Close className='absolute right-6 top-6 text-zinc-400 hover:text-zinc-200'>
              <X size={24} arial-label='Fechar' />
            </Dialog.Close>
            <Dialog.Title className='text-3xl leading-tight font-extrabold'>
              Criar hábito
            </Dialog.Title>
            Conteúdo do Modal
            <NewHabitForm />
          </Dialog.Content>
        </Dialog.Portal>

      </Dialog.Root>

    </div >
  )
}