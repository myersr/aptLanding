/**
 * Created by roy on 12/13/16.
 */
import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './modules/app'
import About from './modules/default/about'
import Home from './modules/default/home'
import sideB from './modules/componentsUI/sideBar'


injectTapEventPlugin() //Maps touch/tap/click events. Temporary until react is react is finished

render(<App/>, document.getElementById('app'))

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            {/*<Route path="/home" component={Home}/>*/}
            <Route path="/about" component={About}/>
        </Route>
    </Router>
), document.getElementById('app'))