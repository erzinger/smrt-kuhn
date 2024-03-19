import { fastAccessRouteList, routeList } from "routes/Mobile";
import ModuleUnavailable from "smrt-library/Components/ModuleUnavailable/Desktop";
import DefaultLayout from "smrt-library/Layouts/Mobile/DefaultLayout";

export default function Docs() {

    return <DefaultLayout routes={routeList} fastAccessRoutes={fastAccessRouteList}>
        <ModuleUnavailable />
    </DefaultLayout>

}