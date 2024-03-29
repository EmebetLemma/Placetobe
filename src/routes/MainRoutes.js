import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const Events = Loadable(lazy(() => import('views/events')));
const Bookmarks = Loadable(lazy(() => import('views/events/bookmarks')));
const EventDetail = Loadable(lazy(() => import('views/event-detail')));
// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
const AddEvent = Loadable(lazy(() => import('views/add-event')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

//Tickets routing
const Tickets = Loadable(lazy(() => import('views/Tickets')));
const TicketDetail = Loadable(lazy(() => import('views/Tickets/detail')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Events />
        },
        {
            path: 'home',
            children: [
                {
                    path: 'default',
                    element: <Events />
                }
            ]
        },

        {
            path: 'utils',
            children: [
                {
                    path: 'util-typography',
                    element: <UtilsTypography />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-typography',
                    element: <UtilsTypography />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-color',
                    element: <UtilsColor />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-shadow',
                    element: <UtilsShadow />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'tabler-icons',
                    element: <UtilsTablerIcons />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'material-icons',
                    element: <UtilsMaterialIcons />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        },
        {
            path: 'events',
            element: <Events />
        },
        {
            path: 'event-detail',
            element: <EventDetail />
        },
        {
            path: 'add-event',
            element: <AddEvent />
        },
        {
            path: 'bookmarks',
            element: <Bookmarks />
        },
        {
            path: 'tickets',
            element: <Tickets />
        },
        {
            path: 'ticket/detail',
            element: <TicketDetail />
        }
    ]
};

export default MainRoutes;
