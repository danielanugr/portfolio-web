import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Posts from './pages/Posts'
import Post from './components/Post'
function App () {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route component={Home} path='/' exact />
          <Route component={Post} path='/post/:slug' />
          <Route component={Posts} path='/post' />
          <Route component={Portfolio} path='/portfolio' />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
