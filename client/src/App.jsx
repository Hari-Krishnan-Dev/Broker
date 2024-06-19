import { BrowserRouter , Routes, Route  } from 'react-router-dom';
import {Home, About, Signin, Signup, Profile}  from './pages';
import Header from './components/Header';
function App() {

return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/SignIn' element={<Signin/>}/>
      <Route path='/SignUp' element={<Signup/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;