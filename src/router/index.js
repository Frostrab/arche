import React from 'react'
import PrivateRoute from '../components/PrivateRoute'
import { Switch } from 'react-router-dom'
import { Evaluation, SummaryEvaluation } from '../pages'
import { EvaluationReportSummary, EvaluationReportVendor } from '../pages'
import {
  Criteria,
  EvaluationTemplate,
  Grade,
  LevelPoint,
  Performance,
  PerformanceGroup,
  Period,
} from '../pages'
import { VendorFilter, VendorProfile } from '../pages'
import { AuthorityCompany, RoleManagement, UserRole } from '../pages'
import { Approval, HolidayCalendar } from '../pages'
export const RouterPath = () => {
  return (
    <Switch>
      {/* inbox*/}
      {/* <PrivateRoute
        path="/Inbox"
        component={Inbox}
      /> */}
      {/* eval management*/}
      {/* <PrivateRoute
        path="/Evaluation_Group/Evaluation_MGT_Group/Evaluation"
        component={Evaluation}
      />
      <PrivateRoute
        path="/Evaluation_Group/Evaluation_MGT_Group/SummaryEvaluation"
        component={SummaryEvaluation}
      /> */}
      {/* eval report */}
      <PrivateRoute
        path="/Evaluation_Group/Evaluation_RP_Group/EvaluationReportSummary"
        component={EvaluationReportSummary}
      />
      <PrivateRoute
        path="/Evaluation_Group/Evaluation_RP_Group/EvaluationReportVendor"
        component={EvaluationReportVendor}
      />
      {/* eval  setup*/}
      {/* <PrivateRoute
        path="/Evaluation_Group/Evaluation_Setup_Group/Criteria"
        component={Criteria}
      />
      <PrivateRoute
        path="/Evaluation_Group/Evaluation_Setup_Group/EvaluationTemplate"
        component={EvaluationTemplate}
      />
      <PrivateRoute
        path="/Evaluation_Group/Evaluation_Setup_Group/Grade"
        component={Grade}
      />
      <PrivateRoute
        path="/Evaluation_Group/Evaluation_Setup_Group/LevelPoint"
        component={LevelPoint}
      />
      <PrivateRoute
        path="/Evaluation_Group/Evaluation_Setup_Group/Performance"
        component={Performance}
      />
      <PrivateRoute
        path="/Evaluation_Group/Evaluation_Setup_Group/PerformanceGroup"
        component={PerformanceGroup}
      />
      <PrivateRoute
        path="/Evaluation_Group/Evaluation_Setup_Group/Period"
        component={Period}
      /> */}

      {/* <PrivateRoute
        path="/Vendor_Group/VendorFilter"
        component={VendorFilter}
      />
      <PrivateRoute
        path="/Vendor_Group/VendorProfile"
        component={VendorProfile}
      /> */}

      <PrivateRoute
        path="/Authorization/AuthorityCompany"
        component={AuthorityCompany}
      />
      <PrivateRoute
        path="/Authorization/RoleManagement"
        component={RoleManagement}
      />
      <PrivateRoute path="/Authorization/UserRole" component={UserRole} />

      <PrivateRoute
        path="/CentralSetting/HolidayCalendar"
        component={HolidayCalendar}
      />
      <PrivateRoute path="/CentralSetting/Approval" component={Approval} />
    </Switch>
  )
}
