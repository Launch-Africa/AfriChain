import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import menu_data from "../../../data/MenuData";

const MobileMenusTwo = ({ setIsActive }: any) => {
  const [navTitle, setNavTitle] = useState("");
  const location = useLocation();
  const currentRoute = location.pathname;

  const isMenuItemActive = (menuLink: string) => {
    return currentRoute === menuLink;
  };

  const isSubMenuItemActive = (subMenuLink: string) => {
    return currentRoute === subMenuLink;
  };

  const closeSidebar = () => {
    setIsActive(false);
  };

  const openMobileMenu = (menu: any) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  return (
    <ul className="navigation">
      {menu_data
        .filter((items) => items.page === "nav_2")
        .map((menu, i) => (
          <React.Fragment key={i}>
            {menu.has_dropdown && (
              <li className="menu-item-has-children">
                <Link
                  to={menu.link}
                  onClick={closeSidebar}
                  className={`${
                    isMenuItemActive(menu.link) ||
                    (menu.sub_menus &&
                      menu.sub_menus.some(
                        (sub_m) =>
                          sub_m.link && isSubMenuItemActive(sub_m.link)
                      ))
                      ? "active"
                      : ""
                  }`}
                >
                  {menu.title}
                </Link>
                <div
                  className={`dropdown-btn ${
                    navTitle === menu.title ? "open" : ""
                  }`}
                  onClick={() => openMobileMenu(menu.title)}
                >
                  <i
                    className={`${
                      navTitle === menu.title
                        ? "fas fa-angle-up"
                        : "fas fa-angle-down"
                    }`}
                  ></i>
                </div>
                {menu.sub_menus && menu.sub_menus.length > 0 && (
                  <ul
                    className="sub-menu"
                    style={{
                      display: navTitle === menu.title ? "block" : "none",
                    }}
                  >
                    {menu.sub_menus.map((sub, index) => (
                      <li key={index}>
                        <Link
                          to={sub.link}
                          onClick={closeSidebar}
                          className={
                            sub.link && isSubMenuItemActive(sub.link)
                              ? "active"
                              : ""
                          }
                        >
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )}
            {!menu.has_dropdown && (
              <li>
                <Link
                  to={menu.link}
                  onClick={closeSidebar}
                  className={isMenuItemActive(menu.link) ? "active" : ""}
                >
                  {menu.title}
                </Link>
              </li>
            )}
          </React.Fragment>
        ))}
    </ul>
  );
};

export default MobileMenusTwo;
