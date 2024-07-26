import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


import RootLayout from './layouts/root-layout'
import DashboardLayout from './layouts/dashboard-layout'


import IndexPage from './routes/home'
import ContactPage from './routes/contact/contact'
import SignInPage from './routes/sign-in/sign-in'
import SignUpPage from './routes/sign-up/sign-up'
import DashboardPage from './routes/dashboard/dashboard'
import InvoicesPage from './routes/dashboard-invoices/dashboard.invoices'
import HelpPage from './routes/help/help'
import ArtigosPage from './routes/artigos/artigos'
import AboutPage from './routes/about-us/about-us'



const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <IndexPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/sign-in/*", element: <SignInPage /> },
      { path: "/sign-up/*", element: <SignUpPage /> },
      { path: "/help", element: <HelpPage/>},
      { path: "/artigos", element: <ArtigosPage/>},
      { path: "/about-us", element: <AboutPage/>},
      {
        element: <DashboardLayout />,
        path: "dashboard",
        children: [
          { path: "/dashboard", element: <DashboardPage /> },
          { path: "/dashboard/invoices", element: <InvoicesPage /> }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)