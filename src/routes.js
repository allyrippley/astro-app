import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import AstroEventsPage from './containers/AstroEventsPage' // eslint-disable-line import/no-named-as-default
import UpcomingEventsPage from './containers/UpcomingEventsPage' // eslint-disable-line import/no-named-as-default
import DetailedEventsPage from './containers/DetailedEventsPage' // eslint-disable-line import/no-named-as-default
// import AboutPage from './components/AboutPage.js'
// import NotFoundPage from './components/NotFoundPage.js'

export default (
  <Route path="/" component={App}>
  <IndexRoute component={UpcomingEventsPage}/>
    <Route path="astro-events" component={AstroEventsPage}/>
    <Route path="upcoming-events" component={UpcomingEventsPage}/>
    <Route path="events/:id" component={DetailedEventsPage}/>
    {/*  <Route path="fuel-savings" component={FuelSavingsPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/> */}
  </Route>
)
