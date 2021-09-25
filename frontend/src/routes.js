import Index from "./pages/index"
import Detail from "./pages/detail"
import Add from "./pages/add"

const routes = [
  {
    path: '/',
    exact: true,
    component: Index
  },
  { 
    path: '/add',
    exact: true,
    component: Add
  },
  {
    path: '/detail/:id',
    exact: true,
    component: Detail
  }
]

export default routes;
