import logo from './logo.svg';
import './App.css';
import Login from "./component/Login";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import UserList from './component/UserList';
import CreateUser from "./component/CreateUser";
function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/"  element={<Login />} />
      <Route path="/userList" element={<UserList/>} />
      <Route path="/create" element={<CreateUser/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
