import { RouteProps } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import CategoryList from "../pages/category/List";

interface MyRouteProps extends RouteProps {
    label: string;
}

const routes:MyRouteProps[] = [
    {
        label: 'Dashboard',
        path: '/',
        element: Dashboard,
        index: true
    },
    {
        label: 'Listar Catergorias',
        path: '/categories',
        element: CategoryList,
        index: true
    },
];

export default routes;

