import React, { useState } from 'react'
import { Layout, Spin, Drawer } from 'antd'
import HeaderTab from './Header'
import MenuList from './MenuList'
import LogoTab from './Logo'
import axios from 'axios'
import './style.css'
const { Sider } = Layout
const getMenu = () => axios.get(`/login`)
const Index = props => {
  const [collapsed, setCollapsed] = useState(true)
  const [menu, setMenu] = useState([
    
     
        {
          name: 'Universe',
          icon: 'file-protect',
          displayOnly: false,
          url: '/',
          parent: null,
        },
        {
          name: 'Perform',
          icon: 'file-protect',
          displayOnly: false,
          url: '/perform',
          parent: null,
        },
     
   
  ])
  const [userLogin, setUserLogin] = useState({
    empNo: '001754',
    firstNameTH: 'user leader1',
    lastNameTH: 'leader1',
    comCode: '10000001',
    orgId: '10001416',
    positionId: '20000641',
  })
  const [spinLoading, setLoading] = useState(true)
  const [rootKey, setRootKey] = useState([])
  const [showDrawer, setShowDrawer] = useState(false)
  const [systenName] = useState('Sale Hub')
  React.useEffect(() => {
    // getMenu ().then (res => {
    //   const {menu, employee} = res.data;
    const data = []
    menu.map(item => data.push(item.name))
    if (window.innerWidth > 480) setCollapsed(false)
    if (window.innerWidth < 480) setCollapsed(true)
    setMenu(menu)
    // setUserLogin (employee);
    setLoading(false)
    setRootKey(data)
    // });
  }, [menu])
  const toggle = () => {
    setCollapsed(!collapsed)
    setShowDrawer(true)
  }
  const onClose = () => {
    setShowDrawer(false)
  }

  return (
    <Spin spinning={spinLoading} delay={0}>
      <Layout>
        {window.innerWidth > 480 ? (
          <Sider
            trigger={null}
            collapsible
            collapsedWidth="0"
            collapsed={collapsed}
            width={256}
            // theme={'light'}
            style={{
              backgroundColor: '#F7F7F8',
              height: '100vh',
            }}
          >
            <LogoTab logoText={systenName} />
            <MenuList menu={menu} rootSubmenuKeys={rootKey} />
          </Sider>
        ) : (
          <Drawer
            title={systenName}
            placement={'left'}
            closable={false}
            onClose={onClose}
            visible={showDrawer}
            bodyStyle={{ padding: 0 }}
          >
            <MenuList menu={menu} rootSubmenuKeys={rootKey} />
          </Drawer>
        )}
        <Layout>
          <div style={{ background: '#d9d9d9', minHeight: '100vh' }}>
            <HeaderTab toggle={toggle} user={userLogin} />
            <div style={{ padding: '20px' }}>
              <span style={styleForAnt.content}>{props.children}</span>
            </div>
          </div>
        </Layout>
      </Layout>
    </Spin>
  )
}
export default Index
const styleForAnt = {
  content: {
    minHeight: '80vh',
  },
}
