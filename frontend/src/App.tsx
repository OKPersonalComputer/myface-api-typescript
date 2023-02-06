import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Posts } from './Posts'
import { UserPosts } from './UserPosts'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
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
