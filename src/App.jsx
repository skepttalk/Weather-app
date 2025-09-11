import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Components/Layout'
import MainPage from './Pages/MainPage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center bg-[#D69E36] ' > 
    <Layout>
         <MainPage />
   </Layout>
    </div>
    
  )
}

export default App
