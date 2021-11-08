import { createWebHistory, createRouter } from "vue-router";
import Team from "../components/Team";
import Profile from "../components/Profile";
import Dashboard from "../components/Dashboard";
import Info from "../components/Info";

const routes = [
  {
    path: "/Team",
    name: "Team",
    component: Team
  },
  {
    path: "/Profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/Info",
    name: "Info",
    component: Info
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
