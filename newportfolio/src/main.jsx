import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import "./css/style.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Projects from './Pages/Projects/Projects.jsx';
import Project from './Pages/Project/Project.jsx';
import { DataProvider } from './hooks/context/DataContext.jsx';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/projects',
        element: <Projects/>
      },
      {
        path: '/project?',
        element: <Project/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={routes}/>
    </DataProvider>
  </StrictMode>,
)
