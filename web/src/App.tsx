import './styles/global.css'
import { Header } from './components/Header'
import { SummaryTable } from './components/Summarytable'
import './lib/dayjs'

//import { Habit } from './components/Habit'

export function App() {


  return (
   <div className=' w-screen h-screen flex justify-center items-center'>
      <div className=' pb-36 w-full max-w-5xl px-4 flex flex-col gap-16'>
          <Header/>
          <SummaryTable/>
      </div>
    
   </div>
     
    
  )
}



// Componente: Reaproveitar / isolar
// Propriedade: informação enviada para modificar um componente visual ou comportamentalmente
