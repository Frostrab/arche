import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Form, Icon, Input } from 'antd'
import { Link } from 'react-router-dom'
import { Button } from '../button/button'
import axios from 'axios'
import './Login.css'
const LoginForm = styled.div`
    background-color: #fafafa
    height: auto;
    min-height: 350px
    min-width: 450px
    width: auto
    z-index:2
    border-radius: 8px;
`
const GlobalStyle = createGlobalStyle`
  body {
    background: url(${props => props.bgImage}) no-repeat center center; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
  }
`
const Header = styled.h2`
  padding-top: 25px;
  text-align: center;
`
const LoginFormStyle = styled.div`
  display: flex
  justify-content: center
  margin-top: 50px
`
const handleClick = () => {
  axios
    .post('http://ams.leaderplanet.co.th/archemyApi/api/Login', {
      username: 'admin@leaderplanet.co.th',
      password: 'admin',
    })
    .then(res => console.log(res.data))
    .catch(e => console.log(e.response))
}
const Login = props => (
  <React.Fragment>
    <GlobalStyle bgImage={props.bgImage} />
    <LoginForm>
      <Header>Login</Header>
      <LoginFormStyle style={{ display: 'flex', justifyContent: 'center' }}>
        <Form className="login-form">
          <Form.Item>
            {props.form.getFieldDecorator('username', {
              rules: [
                { required: true, message: 'Please input your username!' },
              ],
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Username"
                size="large"
                style={{ width: 300 }}
              />
            )}
          </Form.Item>
          <Form.Item>
            {props.form.getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' },
              ],
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
                size="large"
                style={{ width: 300 }}
              />
            )}
          </Form.Item>
          <Form.Item style={{ textAlign: 'center' }}>
            <Link to="/Sales/Accounts">
              <Button
                type="submit"
                width="300px"
                height="43px"
                onClick={() => handleClick()}
              >
                Log in
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </LoginFormStyle>
    </LoginForm>
  </React.Fragment>
)
export const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(
  Login
)
