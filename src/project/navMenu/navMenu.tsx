import { menuItems } from "./menuItems";
import navMenuStyle from "./style/navMenu.module.scss";

export function NavMenu() {
  return (
    <div className={navMenuStyle.navMenu}>
      <div className={navMenuStyle.grid}>
        {menuItems.map((obj) => (
          <div className={navMenuStyle.obj} key={obj.id}>
            <p>{obj.text}</p>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
}
