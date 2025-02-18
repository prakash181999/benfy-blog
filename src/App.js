import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import BlogPage from './components/BlogPage'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/blogpage" component={BlogPage} />
    </Switch>
  </BrowserRouter>
)

export default App
