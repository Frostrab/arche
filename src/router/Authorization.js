import React from 'react'
import PrivateRoute from '../components/PrivateRoute'
import { Switch } from 'react-router-dom'
import { AuthorityCompany, RoleManagement, UserRole } from '../pages'

export const VendorRouter = () => {
  return (
    <Switch>
      <PrivateRoute
        path="/Authorization/AuthorityCompany"
        component={AuthorityCompany}
      />
      <PrivateRoute
        path="/Authorization/RoleManagement"
        component={RoleManagement}
      />
      <PrivateRoute path="/Authorization/UserRole" component={UserRole} />
    </Switch>
  )
}
