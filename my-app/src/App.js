


import './App.css';

import LoginForm from './Component/Form/LoginForm';
import { Route, Routes } from 'react-router';
import Try from './Component/Form/RegistrationForm';
import UserDetails from './Component/Form/UserDetails';
import RegistrationForm from './Component/Form/RegistrationForm';




function App() {
  return (
    <div className="App">
    
      {/* <RegistrationForm /> */}
      {/* <LoginForm /> */}
      {/* <UserDetails /> */}

 <Routes>
        <Route path="/" element={<RegistrationForm/>}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/details" element={<UserDetails />}></Route>



      </Routes> 


    </div>
  );
}

export default App;
