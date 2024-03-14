import type { RouteRecordRaw } from "vue-router";
import {
  IconUser,
  IconDashboard,
  IconOrderedList,
  IconHeartFill,
  IconCodeSandbox,
  IconCodeSquare,
  IconMessage,
  IconSettings,
  IconLock,
  IconCodepen,
  IconWechatpay,
  IconRobot,
} from "@arco-design/web-vue/es/icon";

import system from "./system";

const menu: RouteRecordRaw[] = [
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: {
      title: "仪表盘",
      icon: IconDashboard,
    },
    component: () => import("@/views/DashboardView.vue"),
  },
  {
    path: "/user",
    name: "User",
    meta: {
      title: "用户管理",
      icon: IconUser,
    },
    component: () => import("@/views/User/UserContainer.vue"),
  },
  {
    path: "/role",
    name: "Role",
    meta: {
      title: "角色模型",
      icon: IconCodeSandbox,
    },
    component: () => import("@/views/Role/RoleContainer.vue"),
  },
  {
    path: "/chatModel",
    name: "ChatModel",
    meta: {
      title: "语言模型",
      icon: IconCodepen,
    },
    component: () => import("@/views/ChatModel/ChatModelContainer.vue"),
  },
  {
    path: "/product",
    name: "Product",
    meta: {
      title: "充值产品",
      icon: IconWechatpay,
    },
    component: () => import("@/views/Product/ProductContainer.vue"),
  },
  {
    path: "/apiKey",
    name: "ApiKey",
    meta: {
      title: "APIKEY",
      icon: IconLock,
    },
    component: () => import("@/views/ApiKey/ApiKeyContainer.vue"),
  },
  {
    path: "/order",
    name: "Order",
    meta: {
      title: "充值订单",
      icon: IconOrderedList,
    },
    component: () => import("@/views/Order/OrderContainer.vue"),
  },

  {
    path: "/reward",
    name: "Reward",
    meta: {
      title: "众筹管理",
      icon: IconHeartFill,
    },
    component: () => import("@/views/Reward/RewardContainer.vue"),
  },
  {
    path: "/functions",
    name: "Functions",
    meta: {
      title: "函数管理",
      icon: IconCodeSquare,
    },
    component: () => import("@/views/Functions/FunctionsContainer.vue"),
  },
  {
    path: "/chats",
    name: "Chats",
    meta: {
      title: "对话管理",
      icon: IconMessage,
    },
    component: () => import("@/views/Chats/ChatsContainer.vue"),
  },
  {
    path: "/system",
    name: "System",
    meta: {
      title: "网站设置",
      icon: IconSettings,
    },
    component: () => import("@/views/System/SystemContainer.vue"),
  },
  {
    path: "/sys",
    name: "Sys",
    meta: {
      title: "系统设置",
      icon: IconRobot,
    },
    redirect: () => system[0].path,
    children: system
  },

];

export default menu;
