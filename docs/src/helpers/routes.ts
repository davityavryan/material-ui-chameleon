import {
    AlertsPage,
    BottomNavigationPage,
    BreadcrumbsPage,
    ButtonPage,
    ButtonGroupPage,
    CheckboxPage,
    DateTimePage,
    DrawerPage,
    FloatingActionButtonPage,
    NotFoundPage,
    ProgressPage,
    RadioPage,
    SelectsPage,
    SignInPage,
    SlidersPage,
    SwitchesPage,
    TablesPage,
    TextFieldsPage,
    TransferListPage,
    TypographyPage,
} from 'Pages';

export const ROUTES = {
    alert: {
        path: '/alert',
        component: AlertsPage,
        exact: true,
    },
    bottomNavigation: {
        path: '/bottom-navigation',
        component: BottomNavigationPage,
        exact: true,
    },
    breadcrumbs: {
        path: '/breadcrumbs',
        component: BreadcrumbsPage,
        exact: true,
    },
    button: {
        path: '/button',
        component: ButtonPage,
        exact: true,
    },
    buttonGroup: {
        path: '/button-group',
        component: ButtonGroupPage,
        exact: true,
    },
    checkbox: {
        path: '/checkbox',
        component: CheckboxPage,
        exact: true,
    },
    dateTime: {
        path: '/date-time',
        component: DateTimePage,
        exact: true,
    },
    drawer: {
        path: '/drawer',
        component: DrawerPage,
        exact: true,
    },
    floatingActionButton: {
        path: '/floating-action-button',
        component: FloatingActionButtonPage,
        exact: true,
    },
    home: {
        path: '/',
        component: NotFoundPage,
        exact: true,
    },
    progress: {
        path: '/progress',
        component: ProgressPage,
        exact: true,
    },
    radio: {
        path: '/radio',
        component: RadioPage,
        exact: true,
    },
    select: {
        path: '/select',
        component: SelectsPage,
        exact: true,
    },
    signIn: {
        path: '/examples/sign-in',
        component: SignInPage,
        exact: true,
    },
    sliders: {
        path: '/slider',
        component: SlidersPage,
        exact: true,
    },
    switches: {
        path: '/switch',
        component: SwitchesPage,
        exact: true,
    },
    tables: {
        path: '/table',
        component: TablesPage,
        exact: true,
    },
    textField: {
        path: '/text-field',
        component: TextFieldsPage,
        exact: true,
    },
    transferList: {
        path: '/transfer-list',
        component: TransferListPage,
        exact: true,
    },
    typography: {
        path: '/typography',
        component: TypographyPage,
        exact: true,
    },
    notFound: {
        path: '/*',
        component: NotFoundPage,
        exact: true,
    },
};
