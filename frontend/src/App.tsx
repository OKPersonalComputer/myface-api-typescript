import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { Posts } from './Components/Posts'
import { UsersList } from './Components/UsersList'
import { UserDetail } from './Components/UserDetail'
import { CreateNewUser } from './Components/CreateNewUser'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// navbar

// usertypes in url directlynm

function App() {

  const [userID, setuserID] = useState(1);

  return (
    <Router>
      <h1>MyFace</h1>
      <Routes>
        <Route path="/posts"
          element={<Posts setUserListID={setuserID} />} />
        <Route path="/users"
          element={<UsersList setUserListID={setuserID} />} />
        <Route path={`/users/${userID}`}
          element={<UserDetail userDetailID={userID} />} />
        <Route path="/createuser"
          element={<CreateNewUser />} />
        <Route path="*"
          element={<div>Sorry that page doesn't exist, try these:
            <br /> <Link to="/posts">Posts</Link>
            <br /> <Link to="/users">Users List</Link>
            <br /> <Link to="/createuser">Create New User</Link>
          </div>} />
      </Routes>
    </Router>
  )
}

export default App
