import {
  HomeIcon,
  LayoutIcon,
  CalendarIcon,
  InvoiceIcon,
  UserIcon,
  RolesIcon,
  PagesIcon,
  AuthIcon,
  WizardIcon,
  ModalIcon,
} from "./Icons";

export const SIDEBAR_DATA = [
  {
    id: 1,
    name: "dashboards",
    path: "dashboards",
    icon: <HomeIcon />,
  },
  {
    id: 3,
    name: "calendar",
    path: "calendar",
    icon: <CalendarIcon />,
  },
  {
    id: 5,
    name: "users",
    path: "users",
    icon: <UserIcon />,
  },
  {
    id: 7,
    name: "pages",
    path: "pages",
    icon: <PagesIcon />,
  },
  {
    id: 8,
    name: "authentication",
    path: "authentication",
    icon: <AuthIcon />,
  },
  {
    id: 9,
    name: "wizard examples",
    path: "wizard",
    icon: <WizardIcon />,
  },
  {
    id: 10,
    name: "Log out",
    path: "logout",
    icon: <ModalIcon />,
  }
];
