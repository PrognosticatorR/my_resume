import React, { Component } from "react";
import { List } from "semantic-ui-react";

export default class SidebarItem extends Component {
  renderSkills = () => {
    const { data } = this.props;
    return data.map(({ id, items, title }) => (
      <List ordered>
        <div key={id + title}>
          <p style={{ fontSize: 20, margin: 0 }}>{id + ".  " + title}</p>
          <p style={{ paddingLeft: 20 }}>
            {items.map((li) => (
              <span>{li + ", "}</span>
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
