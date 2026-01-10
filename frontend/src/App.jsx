import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetStarted from "./pages/GetStarted";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ChatDashboard from "./pages/ChatDashboard";
import Chat from "./pages/Chat";

import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/chatDashboard" element={<ChatDashboard />} />
        <Route path="/chat/1" element={<Chat/>} />
    
        <Route path="*" element={<NotFound />} />


        


      </Routes>
    </BrowserRouter>
  );
}
