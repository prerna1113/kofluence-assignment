

import { Route, Routes } from 'react-router';
import './App.css';
import LoginForm from './Component/Form/LoginForm';

import RegistrationForm from './Component/RegistrationForm';


function App() {
  return (
    <div className="App">
      <RegistrationForm />
      <LoginForm />
      

      {/* <Routes>
                <Route path="/loginForm" element={<LoginForm />}></Route>
                 <Route path="/fssai" element={<LoginForm/>}></Route>
                
                
            </Routes> */}

     
    </div>
  );
}

export default App;
