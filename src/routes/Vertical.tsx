import Login from "smrt-library/Pages/Login/Vertical";
import { Help, BellWithNotification, NullIcon } from 'smrt-library/Icons';
import { RouteType } from "smrt-library/Router/Routes";
import Docs from "pages/Docs/Mobile";
import { DocsProvider } from "smrt-library/Context/Docs/Docs";
import Alarms from "smrt-library/Pages/Alarms/Vertical";


// ### Route List ###

const alarmsRoute: RouteType = {
    name: 'Alarmes',
    icon: BellWithNotification,
    path: '/alarms',
    child: <Alarms />,
    hidden: false,
    subRoutes: []
}

export const fastAccessRouteList: Array<RouteType> = [
    alarmsRoute,
]

export const routeList: Array<RouteType> = [
    alarmsRoute,
    {
        name: 'Login',
        icon: NullIcon,
        path: '/login',
        child: <Login />,
        hidden: true,
        public:true,
        subRoutes: []
    },
    {
        name: 'Documentação',
        icon: Help,
        path: '/docs',
        child: <DocsProvider><Docs /></DocsProvider>,
        hidden: true,
        subRoutes: []
    },
];

