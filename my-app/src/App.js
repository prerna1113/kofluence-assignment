


import './App.css';
import RegistrationForm from './Component/RegistrationForm';
import LoginForm from './Component/Form/LoginForm';
import { Route, Routes } from 'react-router';




function App() {
  return (
    <div className="App">
      {/* <RegistrationForm /> */}
      {/* <LoginForm /> */}


      <Routes>
        <Route path="/" element={<RegistrationForm />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>



      </Routes>


    </div>
  );
}

export default App;
