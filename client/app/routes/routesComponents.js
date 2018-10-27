import React from 'react'
//Routes o rutas
import * as routes from './route.js'

// User
import Home from '../Components/Home.jsx'
import Login from '../Components/Login.jsx'
import SignUp from '../Components/SignUp.jsx'
import Listener from '../Components/Listener.jsx'
import Deaf from '../Components/Deaf.jsx'

const RoutesCom = [
    {
        route: routes.SIGNUP,
        components: < SignUp/>
    },
    {
        route: routes.LOGIN,
        components: < Login/>
    },
    {
        route: routes.HOME,
        components: <Home/>
    },
    {
        route:routes.LISTENER,
        components:<Listener/>
    },
    {
        route:routes.DEAF,
        components:<Deaf/>
    } 
    
   
]
export default RoutesCom