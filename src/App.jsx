import React from 'react'
import Home from './components/Home'
import PostsTraditional from './components/PostsTraditional'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import PostsRQ from './components/PostsRQ'
import PostDetailsRq from './components/PostDetailsRq'
import PaginatedQueries from './components/PaginatedQueries'
function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/posts'}>Traditional Posts</Link>
              </li>
              <li>
                <Link to={'/rq-posts'}>RQ Posts</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/posts' element={<PostsTraditional />} />
            <Route exact path='/rq-posts' element={<PostsRQ />} />
            <Route exact path='/rq-posts/:id' element={<PostDetailsRq />} />
            <Route exact path='/paginated-routes' element={<PaginatedQueries />} />
          </Routes>

        </div>
      </BrowserRouter>
    </div>
  )
}

export default App