import React from "react";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import Breadcrumb from "./components/Breadcrumb";
import Content from "./components/Content";
import { Layout } from "antd";
import "./App.css";

const App = () => (
  <div className="App">
    <Layout style={{ minHeight: "100vh" }}>
      <NavBar />
      <Layout>
        <SideBar />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb />
          <Content />
        </Layout>
      </Layout>
    </Layout>
  </div>
);

export default App;
