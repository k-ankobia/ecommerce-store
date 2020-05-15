import React, { Component } from "react";
import "./categories.styles.scss";
import MenuItem from "../MenuItem/MenuItem";
import CATEGORY_SECTIONS from "./categoriesData";

export default class Catogeries extends Component {
  constructor() {
    super();
    this.state = {
      sections: CATEGORY_SECTIONS,
    };
  }
  render() {
    return (
      <div className="categories-card">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
