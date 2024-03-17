import {Routes , Route, BrowserRouter,Link} from 'react-router-dom'
import Onboarding from './components/Onboarding';
import Login from './components/Login';
import Home from './components/Home/Home';
import Resgister from './components/Resgister';
import OptionList from './components/OptionList/OptionList';


function App() {
  
  return (
 
   <Routes>
    <Route  index element={<Onboarding/>} />
    <Route path='/login' element={<Login/>}/>
    <Route path='/home' element={<Home/>} />
    <Route path='/register' element={<Resgister/>} />
    <Route path='/optionlist' element={<OptionList/>}/>
   </Routes>
   
  );
}

export default App;
