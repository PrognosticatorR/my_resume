import React, { Component } from "react";
import { List } from "semantic-ui-react";

export default class SidebarItem extends Component {
  renderSkills = () => {
    const { data } = this.props;
    return data.map(({ id, items, title }) => (
      <List key={id + title} ordered>
        <div>
          <p style={{ fontSize: 20, margin: 0 }}>{id + ".  " + title}</p>
          <p style={{ paddingLeft: 20 }}>
            {items.map((li, i) => (
              <span key={li + i}>{li + ", "}</span>
            ))}
          </p>
        </div>
      </List>
    ));
  };
  render() {
    return this.renderSkills();
  }
}
