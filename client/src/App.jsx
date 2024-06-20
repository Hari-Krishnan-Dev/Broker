import { BrowserRouter , Routes, Route  } from 'react-router-dom';
import {Home, About, Signin, Profile, SignUp}  from './pages';
import Header from './components/Header';
function App() {

return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/Signup' element={<SignUp/>}/>

    </Routes>
    </BrowserRouter>
  )
}


export default App;