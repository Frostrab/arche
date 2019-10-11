import React from 'react'
import PrivateRoute from '../components/PrivateRoute'

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

export const EvaluationRouter = () => {
  return (
    <React.Fragment>
      {/* eval management*/}
      <PrivateRoute
        path="/Evaluation_Group/Evaluation_MGT_Group/Evaluation"
        component={Evaluation}
      />
      <PrivateRoute
        path="/Evaluation_Group/Evaluation_MGT_Group/SummaryEvaluation"
        component={SummaryEvaluation}
      />
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
      <PrivateRoute
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
      />
    </React.Fragment>
  )
}
