/**
 * Created by roy on 12/13/16.
 */
import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router'

import App from 'modules/app'
import About from 'default/about'
import Contact from 'default/contact'
import Home from 'default/home'
import NotFound from 'default/notFound'
import sideB from 'componentsUI/sideBar'

const style = {
    display: "flex"
}
//var NotFoundRoute = Router.NotFoundRoute;
injectTapEventPlugin() //Maps touch/tap/click events. Temporary until react is react is finished

render(<App/>, document.getElementById('app'))

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            {/*<Route path="/home" component={Home}/>*/}
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/404" component={NotFound} />
            <Redirect from={'*'} to="/404" />
        </Route>
    </Router>
), document.getElementById('app'))