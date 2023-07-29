import React from "react";
import { categories } from "../utils/constants";

const SideBar = (props) => {
  return (
    <div className="sideBarContainer">
      {categories.map((category) => {
        return (
          <button
            className="category-btn"
            style={
              props.selectedCategory === category.name
                ? { background: "red", color: "white" }
                : {}
            }
            onClick={() => {
              props.setSelectedCategory(category.name);
            }}
            key={category.name}
          >
            <span
              className="material-symbols-outlined"
              style={
                props.selectedCategory === category.name
                  ? {color: "white"}
                  : {color:"red"}
              }
            >
              {category.icon}
            </span>
            <span className="title">{category.name}</span>
          </button>
        );
      })}
    </div>
  );
};

export default SideBar;
