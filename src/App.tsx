import React from "react";
import { Route, Link } from "react-router-dom";
import { Menu, ConfigProvider, Layout } from "antd";
import zhCN from "antd/lib/locale/zh_CN";

import Employee from "./components/employee";
import Setting from "./components/setting";

import "./App.css";

const { Header, Content, Footer } = Layout;

const App = ({ match }: any) => {
  const defaultKey = match.url.replace("/", "") || "employee";
  return (
      <ConfigProvider locale={zhCN}>
        <Layout>
          <Header>
            <Menu
              mode="horizontal"
              theme="dark"
              className="menu"
              defaultSelectedKeys={[defaultKey]}
            >
              <Menu.Item key="employee">
                <Link to="/employee">员工管理</Link>
              </Menu.Item>
              <Menu.Item key="setting">
                <Link to="/setting">系统设置</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content className="contentWrap">
            <div className="content">
              <Route path="/" exact component={Employee} />
              <Route path="/employee" component={Employee} />
              <Route path="/setting" component={Setting} />
            </div>
          </Content>
          <Footer className="footer">
            项目地址：{" "}
            <a href="https://github.com/Kyrie1996/ts-react-app">
              https://github.com/Kyrie1996/ts-react-app
            </a>
          </Footer>
        </Layout>
      </ConfigProvider>
    )
  }

export default App;