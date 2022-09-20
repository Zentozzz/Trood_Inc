import React from "react";

import { menuItems } from "./menuItems";
import navMenuStyle from "./style/navMenu.module.scss";

export function NavMenu() {
  const [visiblePopup, setVisiblePopup] = React.useState(false);

  return (
    <div className={navMenuStyle.navMenu}>
      <div className={navMenuStyle.grid}>
        <div className={navMenuStyle.position}>
          <div
            className={navMenuStyle.obj}
            onClick={() => setVisiblePopup(!visiblePopup)}
          >
            <p>Project</p>
          </div>
          <div
            className={
              visiblePopup
                ? [navMenuStyle.popup, navMenuStyle.visible].join(" ")
                : navMenuStyle.popup
            }
          >
            <ul>
              <li className={navMenuStyle.all}>
                <p>All</p>
              </li>
              <li className={navMenuStyle.green}>
                <p>Green</p>
              </li>
              <li className={navMenuStyle.yellow}>
                <p>Yellow</p>
              </li>
              <li className={navMenuStyle.red}>
                <p>Red</p>
              </li>
            </ul>
          </div>
        </div>
        {menuItems.map((obj) => (
          <div className={navMenuStyle.obj} key={obj.id}>
            <p>{obj.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
