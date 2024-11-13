import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import AddStudent from 'pages/AddStudent'
import Dashboard from 'pages/Dashboard'
import NotFound from 'pages/NotFound'
import Students from 'pages/Students'
import { useRoutes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Spinner from 'components/Spinner/spinner'
import { useIsFetching, useIsMutating } from '@tanstack/react-query'
function App() {
  const elements = useRoutes([
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/students',
      element: <Students />
    },
    {
      path: '/students/:id',
      element: <AddStudent />
    },
    {
      path: '/students/add',
      element: <AddStudent />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])
  const isFetching = useIsFetching()
  const isMutating = useIsMutating()
  console.log('Fetching ',isFetching)
  console.log('Mutating ',isMutating)

  return (
    <div className='App'>
      <ToastContainer />
      {( isFetching + isMutating ) > 1 && <Spinner />}
      <MainLayout>{elements}</MainLayout>
    </div>
  )
}

export default App
