import React from "react";
import { UseAppSelector, UseAppDispatch } from "../redux/hooks";
import { setBgColor } from "../redux/slice/bgColorSlice";
import { useLocation } from "react-router-dom";

import type { colorParam } from "../redux/slice/bgColorSlice";

import { NavMenu } from "./navMenu/navMenu";

import { items } from "../items";

import projectStyle from "./style/project.module.scss";

export function Project() {
  const [loading, setLoading] = React.useState(false);
  const dispatch = UseAppDispatch();
  const location = useLocation();
  React.useEffect(() => {
    setLoading(false);
    items.map((el) =>
      dispatch(
        setBgColor({
          id: el.id,
          status: el.status,
          bgColorDie: "white",
          bgColorSign: "white",
        })
      )
    );
    setLoading(true);
  }, [location.pathname, dispatch]);

  const bg: [colorParam] = UseAppSelector((state) => state.bgColorSlice.color);
  console.log(loading);

  return (
    <>
      {loading && (
        <div className={projectStyle.project}>
          <NavMenu />
          <div className={projectStyle.table}>
            {items.map((obj) => (
              <div
                className={projectStyle.die}
                style={{ backgroundColor: `${bg[obj.id].bgColorDie}` }}
                key={obj.id}
              >
                <div className={projectStyle.gridElement}>
                  <div className={projectStyle.name}>
                    <div
                      className={projectStyle.sign}
                      style={{
                        backgroundColor: `${bg[obj.id].bgColorSign}`,
                        boxShadow: `0px 0px 10px 0px ${bg[obj.id].bgColorSign}`,
                      }}
                    ></div>
                    <p>{obj.name}</p>
                  </div>
                  <div>
                    <p>{obj.type}</p>
                  </div>
                  <div>
                    <p>{obj.conditions}</p>
                  </div>
                  <div>
                    <p>$ {obj.volume}</p>
                  </div>
                  <div>
                    <p>{obj.roi}</p>
                  </div>
                  <div>
                    <p>{obj.free}</p>
                  </div>
                  <div>
                    <p>{obj.hedge}</p>
                  </div>
                </div>
                <div className={projectStyle.buy}>
                  <p>Buy</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
