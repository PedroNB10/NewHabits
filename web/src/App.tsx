import './styles/global.css'

import { Habit } from './components/Habit'

function App() {


  return (
   <div>
      <Habit completed={3} />
      <Habit completed={4} />
      <Habit completed={5} />
      <Habit completed={6} />
      <Habit completed={7} />
   </div>
     
    
  )
}

export default App

// Componente: Reaproveitar / isolar
// Propriedade: informação enviada para modificar um componente visual ou comportamentalmente
