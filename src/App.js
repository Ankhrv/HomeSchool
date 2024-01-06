import './App.css';
import Header from './Components/Header/Header';
// import Main from './Components/Menu/Main/Main';
// import Str1 from './Content/Str1/Str1';
// import Str2 from './Content/Str2/Str2';
// import Str3 from './Content/Str3/Str3';
// import Str4 from './Content/Str4/Str4';
// import Str5 from './Content/Str5/Str5';
// import Menu from './Components/Menu/Menu';
// import Ball from './Components/Menu/Balll/Ball';
// import Footer from './Components/Footer/Footer';
import Userfront from "@userfront/core";
import { Routes, Route,  Navigate, useLocation, } from "react-router-dom";
import App2 from './App2';
import OSStr1 from './Content/OSStr1/OSStr1';
import OSStr1auth from './Content/OSStr1/OSStr1auth';
import OSStr4 from './Content/OSStr4/OSStr4';
import OSStr2 from './Content/OSStr2/OSStr2';
import OSStr3 from './Content/OSStr3/OSStr3';
import App2auth from './App2auth';

Userfront.init("vnddpqyn");

function App() {

  return (
  <Routes>
  <Route path="/" element={<App2 />} />
  <Route path="/login" element={<App2 />} />
  <Route path="/vopros-otvet" element={<OSStr4/>} /> 
  <Route path="/lichnyi-kabinet-auth" element={<RequireAuth> <OSStr2/> </RequireAuth>} />
  <Route path="/obratnaja-sviaz" element={<OSStr1/>} />
  <Route path="/obratnaja-sviaz-auth" element={<OSStr1auth/>} />
  <Route path="/system-requirements" element={<OSStr3/>} />
  <Route path="/system-requirements-auth" element={<OSStr3/>} />
  <Route path="/dashboard" element={<RequireAuth> <App2auth /> </RequireAuth>} /> 
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
