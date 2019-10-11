import React from 'react'
import { Result } from 'antd'

export const Error = props => (
  <Result
    status="error"
    title="Submission Failed"
    subTitle="Please check and modify the following information before resubmitting."
  />
)
