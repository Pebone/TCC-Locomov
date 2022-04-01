import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/pages/Login/Login.jsx'
import UsersList from '../src/components/pages/UserDashboard/Users.jsx'

function App() {
  
  return(
    <Router>
      <Routes>
        <Route exact path = '/' element = {<Login />}></Route>

        <Route exact path = '/users' element = {<UsersList />}></Route>
      </Routes>
    </Router>
  )

}

export default App;
