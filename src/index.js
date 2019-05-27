import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import App from './App'
import MainAccueil from './main/MainAccueil'
import MainMembres from './main/MainMembres'
import MainAlbums from './main/MainAlbums'
import MainFicheMembre from './main/MainFicheMembre'
import './assets/scss/bootstrap.scss';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={MainAccueil}/>
            <Route path='/albums' component={MainAlbums}/>
            <Route path='/membres' component={MainMembres}/>
            <Route path='/membres/:userId' component={MainFicheMembre}/>
        </Route>
    </Router>
), document.getElementById('app'));
