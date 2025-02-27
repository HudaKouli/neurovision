import './App.css';
import './App.css';
import Homepage from './Pages/Home';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import SignupPage from './Pages/Authpage/SignupPage.jsx';
import LoginPage from './Pages/Authpage/LoginPage.jsx';
import BlogPage from './Pages/Blog.jsx';
import ContactUs from './Pages/ContactUs/ContactUs.jsx';
import CommunityPage from './Pages/Community.jsx';

function App() {
  return (
    <>

    <BrowserRouter basename="/neurovision">
    <div>
    <Routes>
    <Route exact path="/" element={<Homepage />} />
            <Route path="/ContactUs" element={<ContactUs/>} />
            <Route exact path="/LoginPage" element={<LoginPage />} />
            <Route exact path="/SignupPage" element={<SignupPage />} />
            <Route exact path="/Blog" element={<BlogPage />} />
            <Route exact path="/Community" element={<CommunityPage />} />


    </Routes>
    </div>



</BrowserRouter>
    </>


  );
}

export default App;
  