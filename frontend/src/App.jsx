import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import Footer from '../components/Footer'
import Signin from '../pages/Signin'
import ProtectedRoute from '../components/ProtectedRoute'
import { RecoilRoot, useRecoilValue } from 'recoil'

function App() {

  return (
    <BrowserRouter>
    <RecoilRoot>
      <Navbar />
      <MainApp />
      <Footer />
    </RecoilRoot>
    </BrowserRouter>
  )
}

const MainApp = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/dashboard' element={
        <ProtectedRoute>
        <Dashboard />
        </ProtectedRoute>
      } />
    </Routes>
    </>
  )
}

export default App
