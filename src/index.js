import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './nav/navbar'
import Sport from './Pages/Sport'
import Tennis from './Pages/Tennis'
import Foot from './Pages/Foot'
import Home from './Pages/Home'

const navLinks = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Sport',
    href: '/sport'
  },
  {
    title: 'Tennis',
    href: '/tennis'
  },
  {
    title: 'Foot',
    href: '/foot'
  }]

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/sport" component={Sport} />
    <Route path="/tennis" component={Tennis} />
    <Route path="/foot" component={Foot} />
  </Switch>
)

const App = () => (
  <BrowserRouter>
    <div>
      <NavBar bgColor="red" titleColor="white" navData={navLinks} />
      <Router />
    </div>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('app'))
