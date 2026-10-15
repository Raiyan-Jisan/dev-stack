// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'



import './App.css'
// import toast, { Toaster } from 'react-hot-toast'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar'
import Banner from './components/banner'
import MainLayout from './components/MainLayout';



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <Banner />
     <MainLayout />
      <ToastContainer />


    </>
  )
}

export default App


