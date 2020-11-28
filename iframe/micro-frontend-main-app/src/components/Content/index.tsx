import React from "react";
import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";

import menu from "../../router";



import Iframe from "../../components/Iframe";

const { Content } = Layout;

const MyContent = () => {
  return (
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
      <Switch>
        {menu.map((item) => {
          const exact = typeof item.items === "undefined" || !item.items;
          return <Route key={item.id} path={item.path} exact={exact} component={item.component} />;
        })}


      </Switch>
    </Content>
  );
};

export default MyContent;
