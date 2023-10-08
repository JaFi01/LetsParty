import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/activities/home/homepage";
import ActivityDashboard from "../../features/activities/ActivityDashboard";
import ActivityForm from "../../features/activities/ActivityForm";
import ActivityDetails from "../../features/activities/ActivityDetails";

export const routes: RouteObject[] = [
   { 
    path: '/',
    element: <App />,
    children: [
        {path: '', element: <HomePage/>},
        {path: 'activities', element: <ActivityDashboard/>},
        {path: 'activities/:id', element: <ActivityDetails/>},
        {path: 'createActivity', element: <ActivityForm/>},
    ]
        
    },
]

export const router = createBrowserRouter(routes)