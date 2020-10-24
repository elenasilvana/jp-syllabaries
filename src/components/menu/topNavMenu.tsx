import React, { Children, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

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
  const routePaths = ROUTES_MENU_PATH;
  const location = useLocation();

  return (
    <div>
      <div className="topnav-menu">
        {routePaths !== undefined &&
          routePaths.children.map((menuItem) => {
            return (
              <div
                className="topnav-menu-item"
                style={{
                  backgroundColor:
                    location.pathname === menuItem.path
                      ? "purple"
                      : "whitesmoke",
                }}
              >
                <Link
                  to={menuItem.path}
                  style={{ color: "grey", padding: "10px" }}
                >
                  {menuItem.name}
                </Link>
              </div>
            );
          })}
      </div>
      <div>{children}</div>
    </div>
  );
};
