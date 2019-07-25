import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Page1 from './components/Page1'
import Page2 from './components/Page2'

const Routes = () => (
  <main className="main-reset">
    <Switch>
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route path="*" component={Page1} />
      <Route path="/" component={Page1} />
    </Switch>
  </main>
)

export default Routes
