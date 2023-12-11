import './App.css';
import Home from './components/Home';
import Login from './components/auth/Login';
import Registration from './components/auth/Registration';
import TodoHomepage from './components/todo/TodoHomepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login> </Login>} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/TodoHomepage" element={<TodoHomepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
