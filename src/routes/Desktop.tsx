import Login from "smrt-library/Pages/Login/Desktop";
import { AnalysisChart, EditNote, Error, Help, HorizontalCharts, NullIcon, Settings, SquareArea } from 'smrt-library/Icons';
import { RouteType } from "smrt-library/Router/Routes";
import Docs from "pages/Docs/Desktop";
import { DocsProvider } from "smrt-library/Context/Docs/Docs";

import VariableAnalysis from "smrt-library/Pages/VariableAnalysis/Desktop";
import ManualInput from "smrt-library/Pages/ManualInput/Desktop";
import EventAnalysis from "smrt-library/Pages/EventAnalysis/Desktop";
import OccupationAnalysis from "smrt-library/Pages/OccupationAnalysis/Desktop";
import SettingsEvents from "smrt-library/Pages/Settings/Events/Desktop";

export const routeList: Array<RouteType> = [
    {
        name: 'Login',
        icon: NullIcon,
        path: '/login',
        child: <Login />,
        hidden: true,
        public: true,
        subRoutes: []
    },
    {
        name: 'Apontamento de Dados',
        icon: EditNote,
        path: '/data-input',
        child: <ManualInput />,
        hidden: true,
        subRoutes: []
    },
    {
        name: 'Analise de Variáveis',
        icon: AnalysisChart,
        path: '/variable-analysis',
        child: <VariableAnalysis />,
        hidden: false,
        subRoutes: []
    },
    {
        name: 'Análise de Eventos',
        icon: HorizontalCharts,
        path: '/events-analysis',
        child: <EventAnalysis />,
        hidden: true,
        subRoutes: []
    },
    {
        name: 'Análise de Ocupação',
        icon: SquareArea,
        path: '/occupation-analysis',
        child: <OccupationAnalysis />,
        hidden: false,
        subRoutes: []
    },
    {
        name: 'Configurações',
        icon: Settings,
        path: '/settings',
        child: null,
        hidden: false,
        subRoutes: [
            {
                name: 'Eventos',
                path: '/events',
                hidden: false,
                icon: Error,
                userGroup: 'Configuração',
                child: <SettingsEvents />
            },
        ]
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