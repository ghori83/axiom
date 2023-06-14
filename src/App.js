import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import LocalStorage from './pages/LocalStorage';
import Todo from './pages/Todo';
import AuthGuard from './Guard/AuthGuard';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home"

function App() {
  return (
    <div className="App" >

<BrowserRouter>
<Navbar />

        <Routes>
          
          
            <Route path="/" element={<AuthGuard><Todo /> </AuthGuard>} />
            <Route path="about" element={<About />} />
            <Route path="local-storage" element={<LocalStorage />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="home" element={<AuthGuard> <Home /> </AuthGuard> } />

          
        </Routes>
      </BrowserRouter>

      {/* <Route path="todos" element={<AuthGuard><Todo /></AuthGuard> } /> */}

    </div>
  );
}

export default App;
