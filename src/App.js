import './App.css';
import Userfront from "@userfront/core";
import { Routes, Route,  Navigate, useLocation } from "react-router-dom";
import App2 from './App2';
import OSStr1 from './Content/OSStr1/OSStr1';
import OSStr1auth from './Content/OSStr1/OSStr1auth';
import OSStr4 from './Content/OSStr4/OSStr4';
import OSStr5 from './Content/OSStr5/OSStr5';
import OSStr5auth from './Content/OSStr5/OSStr5auth';
import OSStr6 from './Content/OSStr6/OSStr6';
import OSStr6auth from './Content/OSStr6/OSStr6auth';
import OSStr7 from './Content/OSStr7/OSStr7';
import OSStr8 from './Content/OSStr8/OSStr8';
import OSStr7auth from './Content/OSStr7/OSStr7auth';
import OSStr4auth from './Content/OSStr4/OSStr4auth';
import OSStr2 from './Content/OSStr2/OSStr2';
import OSStr3 from './Content/OSStr3/OSStr3';
import OSStr3auth from './Content/OSStr3/OSStr3auth';
import App2auth from './App2auth';

Userfront.init("vnddpqyn");

function App() {

  return (
  <Routes>
  <Route path="/" element={<App2 />} />
  <Route path="/login" element={<App2 />} />
  <Route path="/vopros-otvet" element={<OSStr4/>} /> 
  <Route path="/kabinet-pedagoga" element={<OSStr5/>} /> 
  <Route path="/kabinet-pedagoga-auth" element={<OSStr5auth/>} /> 
  <Route path="/Og" element={<OSStr6/>} /> 
  <Route path="/Ogauth" element={<OSStr6auth/>} /> 
  <Route path="/vopros-otvet-y" element={<OSStr7/>} /> 
  <Route path="/vopros-otvet-ya" element={<OSStr7auth/>} /> 
  <Route path="/vopros-otvet-auth" element={<OSStr4auth/>} /> 
  <Route path="/lichnyi-kabinet-auth" element={<OSStr2/>} />
  <Route path="/obratnaja-sviaz" element={<OSStr1/>} />
  <Route path="/obratnaja-sviaz-auth" element={<OSStr1auth/>} />
  <Route path="/system-requirements" element={<OSStr3/>} />
  <Route path="/Video" element={<OSStr8/>} />
  <Route path="/system-requirements-auth" element={<OSStr3auth/>} />
  <Route path="/dashboard" element={<RequireAuth> <App2auth /> </RequireAuth>} /> 
</Routes>
);
}

export default App;

function RequireAuth({ children }) {
let location = useLocation();
if (!Userfront.tokens.accessToken) {
// Redirect to the /login page
return <Navigate  to={{
  pathname: "/",
  state: { from: location },
}} />;
}

return children;
}
