import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Layout from './layout'
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      }}
    />
  )
}
export default PrivateRoute
