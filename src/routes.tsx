import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import Sobre from './pages/sobre'
import NotFound from './pages/404'
import Contato from './pages/Contato/contato'
import Tarefas from './pages/Tarefas'


const router = createBrowserRouter([
  {path: '/', element: <Home />, errorElement: <NotFound />},
  {path: '/sobre', element: <Sobre />},
  {path: '/Contato', element: <Contato/>},
  {path: '/Tarefas', element: <Tarefas />}
])

export default router