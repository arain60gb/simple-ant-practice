import React,{useState} from 'react'
import './App.css';

import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const SiderDemo = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) =>{
      setCollapsed(!collapsed)
  }
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center', color:"red" }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
}

// ReactDOM.render(<SiderDemo />, mountNode);
export default SiderDemo;



// Add to card project


// import React, { useContext } from 'react'
// import { FirstName, LastName } from './App'
// class ComA extends React.Component {
//     // const fname = useContext(FirstName);
//     // const lname = useContext(LastName);
//     constructor(props) {
//         super(props);
//         this.state = { value: 0 };
//         this.buttonClicked = this.buttonClicked.bind(this);
//     }
//     buttonClicked(event) {
//         this.setState({ value: this.state.value + 1 });
//     }
//     render() {
//         return (
//             <div>
//                 {/* <h1>My First name is {fname} and my last name is {lname}</h1> */}
//                 <div>
//                     <i class="fa fa-cart-plus" aria-hidden="true"></i>
//                 </div>
//                 <div className="cart-wrapper">
//                     <div className="img-wrapper item">
//                         <img src="https://www.whatmobile.com.pk/admin/images/Apple/AppleiphoneXPlus-b.jpg          " />
//                     </div>
//                     <div className="text-wrapper item">
//                         <span>
//                             I-Phone
//                          </span>
//                         <span>
//                             Price:$1000.00
//                         </span>
//                     </div>
//                     <div className="btn-wrapper item">
//                         <div className="counting">{this.state.value}</div>
//                         <button onClick={this.buttonClicked}>Add To Cart</button>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
// export default ComA;

