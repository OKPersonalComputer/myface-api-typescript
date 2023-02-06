import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { Posts } from './Components/Posts'
import { UserPosts } from './Components/UserPosts'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <h1>MyFace</h1>
      <Routes>
        <Route path="/posts"
          element={<Posts />} />
        <Route path="/users"
          element={<UserPosts />} />
        <Route path="*"
          element={<div>Sorry that page doesn't exist, try these:
            <br /> <Link to="/posts">Posts</Link>
            <br /> <Link to="/users">User Details</Link>
          </div>} />
      </Routes>
    </Router>
  )
}

export default App
