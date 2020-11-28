import React from "react";
import { useHistory } from "react-router-dom";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import menu from "../../router";

const { SubMenu } = Menu;
const { Sider } = Layout;

const SideBar = () => {
  const history = useHistory();

  const handleClick = (path: string) => {
    history.push(path);
  };

  return (
    <Sider width={200} className="site-layout-background">
      <Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
        {menu.map((item) => {
          return Array.isArray(item.items) ? (
            <SubMenu key={item.id} icon={<UserOutlined />} title={item.name}>
              {item.items.map((iitem, idx) => {
                return (
                  <Menu.Item onClick={() => handleClick(iitem.path)} key={idx}>
                    {iitem.name}
                  </Menu.Item>
                );
              })}
            </SubMenu>
          ) : (
            <Menu.Item
              onClick={() => handleClick(item.path)}
              icon={<UserOutlined />}
              key={item.id}
            >
              {item.name}
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
};

export default SideBar;

// `${item.path}${iitem.path}`
