import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import "./topNavMenu.styles.scss";

const ROUTES_MENU_PATH = {
  name: "public_routes",
  children: [
    {
      id: "public.home",
      name: "Home",
      path: "/",
      icon: "",
    },
    {
      id: "public.syllabary",
      name: "Syllabary",
      path: "/syllabary",
      icon: "",
    },
    {
      id: "public.play",
      name: "Play",
      path: "/play",
      icon: "",
    },
    {
      id: "public.about",
      name: "About",
      path: "/about",
      icon: "",
    },
  ],
};

export interface MenuProps {
  children?: ReactNode;
}

export const TopNavMenu: React.FunctionComponent<MenuProps> = ({
  children,
}) => {
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);

  const routePaths = ROUTES_MENU_PATH;
  const location = useLocation();

  return (
    <div>
      <div className="topnav-menu">
        {routePaths !== undefined &&
          routePaths.children.map((menuItem) => {
            return (
              <Link
                className={`topnav-menu-item ${
                  isOpenMenu ? "topnav-menu-item-is-open" : ""
                } ${location.pathname === menuItem.path ? "active-item" : ""}`}
                to={menuItem.path}
                onClick={() => setIsOpenMenu(false)}
              >
                {menuItem.name}
              </Link>
            );
          })}
        <div className={`topnav-menu-icon${isOpenMenu ? "-is-open" : ""}`}>
          <IconButton onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <MenuIcon />
          </IconButton>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
