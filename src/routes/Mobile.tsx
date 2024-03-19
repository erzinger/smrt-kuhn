import Login from "smrt-library/Pages/Login/Mobile";
import { Help, NullIcon} from 'smrt-library/Icons';
import { RouteType } from "smrt-library/Router/Routes";
import Docs from "pages/Docs/Mobile";
import { DocsProvider } from "smrt-library/Context/Docs/Docs";

export const fastAccessRouteList: Array<RouteType> = [
    
]
// ### Route List ###
export const routeList: Array<RouteType> = [
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
        hidden: false,
        subRoutes: []
    },
];


