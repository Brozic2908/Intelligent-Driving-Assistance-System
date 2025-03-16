import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'

const publicRoutes = [
  {path: '/home', component: Home},
  {path: '/login', component: Login, layout: null},
]
const privateRoutes = [

]

export {publicRoutes, privateRoutes}