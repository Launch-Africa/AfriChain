import React from "react";
import { Link, useLocation } from "react-router-dom";
import menu_data from "../../../data/MenuData";

const NavMenuTwo = () => {
  const location = useLocation();
  const currentRoute = location.pathname;

  const isMenuItemActive = (menuLink: string) => {
    return currentRoute === menuLink;
  };

  const isSubMenuItemActive = (subMenuLink: string) => {
    return currentRoute === subMenuLink;
  };

  return (
    <ul className="navigation">
      {menu_data
        .filter((items) => items.page === "nav_2")
        .map((menu: any) => (
          <li
            key={menu.id}
            className={menu.has_dropdown ? "menu-item-has-children" : ""}
          >
            {/* Main menu item */}
            <Link
              to={menu.link}
              className={`section-link ${
                isMenuItemActive(menu.link) ||
                (menu.sub_menus &&
                  menu.sub_menus.some((sub_m: any) =>
                    sub_m.link && isSubMenuItemActive(sub_m.link)
                  ))
                  ? "active"
                  : ""
              }`}
            >
              {menu.title}
            </Link>

            {/* Dropdown menu */}
            {menu.has_dropdown && menu.sub_menus && (
              <ul className="sub-menu">
                {menu.sub_menus.map((sub_m: any, i: number) => (
                  <li key={i}>
                    <Link
                      to={sub_m.link}
                      className={
                        sub_m.link && isSubMenuItemActive(sub_m.link)
                          ? "active"
                          : ""
                      }
                    >
                      {sub_m.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
    </ul>
  );
};

export default NavMenuTwo;
