import './App.css';
import Header from './Components/Header/Header';
// import Main from './Components/Menu/Main/Main';
import Str1 from './Content/Str1/Str1';
import Str2 from './Content/Str2/Str2';
import Str3 from './Content/Str3/Str3';
import Str4 from './Content/Str4/Str4';
import Str5 from './Content/Str5/Str5';
import Menu from './Components/Menu/Menu';
import Ball from './Components/Menu/Balll/Ball';
import Footer from './Components/Footer/Footer';
import Userfront from "@userfront/core";
import { Routes, Route,  Navigate, useLocation, } from "react-router-dom";
import App2 from './App2';
import Os from './Content/Os/Os';
import Lk from './Content/Lk/Lk';
import App2auth from './App2auth';

Userfront.init("vnddpqyn");

function App() {

  return (
  <Routes>

  <Route path="/" element={<App2 />} />
  <Route path="/profile" element={<Lk/>} />
  <Route path="/obratnajasviaz" element={<Os/>} />
  <Route path="/dashboard" element={<App2auth />} />
  <Route path="/dashboard" element={<RequireAuth> <App2auth /> </RequireAuth>} /> 
{/* 
  <Route path="/UserProfileinfo" element={<RequireAuth> <UserProfileinfo /> </RequireAuth>} />

  <Route path="/Designnproject" element={<RequireAuth> <Designnproject /> </RequireAuth>} /> */}


</Routes>

);
}



export default App;

function RequireAuth({ children }) {
let location = useLocation();
if (!Userfront.tokens.accessToken) {
// Redirect to the /login page
return <Navigate to="/" state={{ from: location }} replace />;
}

return children;
}
