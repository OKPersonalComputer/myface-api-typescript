import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './style/App.scss';
import { Posts } from './Components/Posts'
import { UsersList } from './Components/UsersList'
import { UserDetail } from './Components/UserDetail'
import { CreateNewUser } from './Components/CreateNewUser'
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom'
import { Menu } from './Components/Menu'

function App() {

  const [userID, setuserID] = useState(1);

  return (
    <div id="wholepage">
      <Router>
        <Menu />
        <h1>MyFace</h1>
        <Routes>
          <Route path="posts">
            <Route path=""
              element={<Posts setUserListID={setuserID} />} />
            <Route path=":pageNumID/:postNumID"
              element={<Posts setUserListID={setuserID} />} />
          </Route>
          <Route path="/users"
            element={<UsersList setUserListID={setuserID} />} />
          <Route path={`/users/${userID}`}
            element={<UserDetail userDetailID={userID} />} />
          <Route path="/createuser"
            element={<CreateNewUser />} />
          <Route path="*"
            element={<div>
              Welcome to MyFace! Use the Menu at the top of the page to navigate.
            </div>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
