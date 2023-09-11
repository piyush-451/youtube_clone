import React from "react";
import { categories } from "../../../youtube-clone/src/utils/constants";

function SideBar(props) {
  const createItem = (category, index) => {
    const selectedCategoryStyle =
      props.category === category.name
        ? {
            color: "white",
            backgroundColor: "red",
          }
        : null;

    return (
        <div
          onClick={() => props.updateCategory(category.name)}
          className="sidebar-item"
          key={index}
          style={selectedCategoryStyle}
        >
          <span className="icon" style={selectedCategoryStyle}>
            {category.icon}
          </span>
          <span className="category-name">{category.name}</span>
        </div>
    );
  };

  return <div className="SideBar">{categories.map(createItem)}</div>;
}

export default SideBar;
