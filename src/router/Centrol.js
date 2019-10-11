import React from 'react'
import PrivateRoute from '../components/PrivateRoute'
import { Switch } from 'react-router-dom'
import { HolidayCalendar, Approval } from '../pages'

export const CentrolRouter = () => {
  return (
    <Switch>
      <PrivateRoute
        path="/CentralSetting/HolidayCalendar"
        component={HolidayCalendar}
      />
      <PrivateRoute path="/CentralSetting/Approval" component={Approval} />
    </Switch>
  )
}
