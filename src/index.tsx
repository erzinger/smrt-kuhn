import ReactDOM from 'react-dom/client';
import Routes from 'smrt-library/Router/RouteManager'
import { SecretProvider } from 'smrt-library/Context/Secret/Secret';
import GlobalStyle from 'smrt-library/Style/global';
import { routeList as routeListDesktop } from 'routes/Desktop';
import { routeList as routeListVertical } from 'routes/Vertical';
import { PageCarrouselProvider } from 'smrt-library/Context/PageCarrousel/PageCarrousel';
import { routeList } from 'routes/Mobile';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <SecretProvider>
    <PageCarrouselProvider>
      <GlobalStyle />
      <Routes routeListDesktop={routeListDesktop} routeListMobile={routeList} routeListVertical={routeListVertical} />
    </PageCarrouselProvider>
  </SecretProvider>
);
