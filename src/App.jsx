
import './App.css'

import { ToastContainer } from 'react-toastify'
// import { toast } from "react-toastify";

import Navbar from './components/Navbar'
import Banner from './components/banner'
import MainLayout from './components/MainLayout'
import Footer from './components/Footer'



function App() {

  return (
    <>
    <Navbar/>
     <Banner />
     <MainLayout />
     <Footer/>
      <ToastContainer />


    </>
  )
}

export default App


