import React from "react";
// import { Link } from "react-router-dom";
import { Switch } from "antd";
import "./style.scss";
import arrItem from "./data";

function OptionsWidget() {
  return (
    <div className="OptionsWidget">
      <div className="OptionsWidget__row">
        {arrItem.map((item) => {
          return (
            <div key={item.name} className="OptionsWidget__item item">
              <div className="item-icon">
                <img src={item.icon} alt={item.title} className="item-img" />
              </div>
              <div className="item-text">{item.title} </div>
              <Switch className="btn-Switch" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OptionsWidget;
