import Home from "../views/Home";
import Gys from "../views/Gys";
import Kfs from "../views/Kfs";

const menu: Menu = [
  {
    id: "home",
    name: "首页",
    path: "/",
    component: Home
  },
  {
    id: "setting",
    name: "系统设置",
    path: "/setting",
    items: [
      {
        name: "用户管理",
        path: "/user-config",
      },
      {
        name: "开发商管理",
        path: "/kfs-config",
        iframe: true,
      },
      {
        name: "供应商管理",
        path: "/gys-config",
        iframe: true,
      },
    ],
  },
  {
    id: "gys",
    name: "供应商",
    path: "/gys",
    items: [
      {
        name: "供应商库",
        path: "/ku",
        iframe: true,
      },
      {
        name: "精选供应商库",
        path: "/select-ku",
        iframe: true,
      },
    ],
  },
  {
    id: "kfs",
    name: "开发商",
    path: "/kfs",
    items: [
      {
        name: "招募",
        path: "/zm",
        iframe: true,
      },
      {
        name: "招标",
        path: "/zb",
        iframe: true,
      },
    ],
  },
  {
    id: "operate-support",
    name: "运营支持",
    path: "/operate-support",
    iframe: true,
  },
];

type Menu = Array<{
  id: string;
  name: string;
  path: string;
  iframe?: true;
  // todo
  component?: React.FC
  items?: Array<{
    name: string;
    path: string;
    iframe?: true;
  }>;
}>;

export default menu;
