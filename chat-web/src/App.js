import {Routes , Route, BrowserRouter,Link} from 'react-router-dom'
import Onboarding from './components/Onboarding';
import Login from './components/Login';
import Home from './components/Home';
import Resgister from './components/Resgister';


function App() {
  
  return (
 
   <Routes>
    <Route  index element={<Onboarding/>} />
    <Route path='/login' element={<Login/>}/>
    <Route path='/home' element={<Home/>} />
    <Route path='/register' element={<Resgister/>} />
   </Routes>
   
  );
}

export default App;
