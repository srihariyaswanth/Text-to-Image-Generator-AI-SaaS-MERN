// export default function App() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100">
//       <h1 className="text-5xl font-bold text-blue-600">
//         Tailwind v4 + Vite + React is working! 🚀
//       </h1>
//     </div>
//   )
// }
import React, { useContext } from 'react'    //rafce
import BuyCredit from './pages/BuyCredit'
import Home from './pages/Home'
import Result from './pages/Result'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const{showLogin}=useContext(AppContext)
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <ToastContainer  position='bottom-right'/>
      <Navbar/>
      {showLogin && <Login/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/buy' element={<Buycredit/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App