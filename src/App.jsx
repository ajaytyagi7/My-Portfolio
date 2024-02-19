import react from 'react'
import{BrowserRouter,Link,Routes,Route,} from 'react-router-dom'
import './App.css'
import Home from './Component/Home'


function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Home />}></Route>
     <Route path='/Home' element={<Home />}></Route>
      



     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
