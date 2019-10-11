import React from 'react'
import PrivateRoute from '../components/PrivateRoute'
import { Switch } from 'react-router-dom'
import { VendorFilter, VendorProfile } from '../pages'

export const VendorRouter = () => {
  return (
    <Switch>
      <PrivateRoute
        path="/Vendor_Group/VendorFilter"
        component={VendorFilter}
      />
      <PrivateRoute
        path="/Vendor_Group/VendorProfile"
        component={VendorProfile}
      />
    </Switch>
  )
}
