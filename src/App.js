// import { Button } from '@chakra-ui/react'
import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Videos from './components/Videos';
import FreeVideos from './components/FreeVideos';
import UploadVideos from './components/UploadVideos';
import Footer from './components/Footer'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ForgotPassword from './components/ForgotPassword'



function App() {
  return (

   <Router>
          <Header/>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/videos' element={<Videos/>}/>
     <Route path='/videos?category=free-videos' element={<FreeVideos/>}/>
     <Route path='/upload' element={<UploadVideos/>}/>
     <Route path='/signin' element={<SignIn/>}/>
     <Route path='/signup' element={<SignUp/>}/>
     <Route path='/forgotpassword' element={<ForgotPassword/>}/>

    </Routes>
           <Footer/>
   </Router>
  );
}

export default App