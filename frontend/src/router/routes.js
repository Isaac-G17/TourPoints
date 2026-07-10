import { Home } from "../views/home.js";
import { notFound } from "../views/notFound.js";


export const routes = {
    "/": {
        render: Home,
        requiresAuth: false,
    }
    // "/login": {
    //     // render: renderLogin,
    //     // setup: setupLogin,
    //     // requiresAuth: false,
    //     // redirectIfAuthenticated: true,
    // },
    // "/register": {
    //     // render: renderRegister,
    //     // setup: setupRegister,
    //     // requiresAuth: false,
    //     // redirectIfAuthenticated: true,
    // },
    // "/dashboard": {
    //     // render: renderDashboard,
    //     // setup: setupDashboard,
    //     // requiresAuth: true,
    // },
    // "/profile": {
    //     // render: renderProfile,
    //     // requiresAuth: true,
    //     // setup: setupProfileView,
    // },
    // "/admin": {
    //     // render: renderAdmin,
    //     // requiresAuth: true,
    //     // allowedRoles: ["ADMIN"],
    //     // setup: setupAdminView,
    // }
}

export const notFoundView = notFound;