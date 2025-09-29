import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Layout from '../Layouts'

// Routes
import { authProtectedRoutes, publicRoutes } from './allRoutes'
import NonAuthLayout from '../layouts/NonAuthLayout'
import { AuthProvider } from '../lib/authContext'

export const RoutesComponents = () => {

  return (
    <React.Fragment>
      <AuthProvider>
        <Routes>
          <Route>
            { publicRoutes.map((route, idx) => {
              console.log(route);
              return (
              <Route
                key={idx}
                path={route.path}
                element={<NonAuthLayout> {route.component} </NonAuthLayout>}
                // exact={true}
              />
            )}) }
          </Route>
        </Routes>
      </AuthProvider>
    </React.Fragment>
  )
}