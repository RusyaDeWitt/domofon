import { BrowserRouter, Route, Routes } from "react-router-dom";
import {LoginPage, UserPosts, UsersPage} from './pages'
import './App.css';

function App() {
  return (
    <BrowserRouter>
       <Routes>
           <Route path='/' element={<LoginPage />} />
           <Route path='/users' element={<UsersPage />} />
           <Route path='/user/posts/:id' element={<UserPosts />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
