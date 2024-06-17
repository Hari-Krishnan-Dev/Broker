import { BrowserRouter , Routes, Route  } from 'react-router-dom';
import {Home, About, Signin, SignOut, Profile}  from './pages';
import Header from './components/Header';
function App() {

return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/SignIn' element={<Signin/>}/>
      <Route path='/SignOut' element={<SignOut/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;