import React, { Component } from "react";
import { List } from "semantic-ui-react";

export default class ContentItem extends Component {
  renderItems() {
    let data = this.props.data;
    return data.map(({ id, title, duration, description, points }) => (
      <List key={id + title}>
        <div style={{ marginTop: 30 }}>
          <p style={{ fontSize: 20, margin: 0 }}>{id + ".  " + title}</p>{" "}
          <span style={{ paddingLeft: 20 }}>{duration}</span>
          <p style={{ paddingLeft: 20, fontSize: 16, margin: 0 }}>
            {description}
          </p>
          <div style={{ paddingLeft: 30 }}>
            <List bulleted>
              {points.map((point, i) => (
                <List.Item key={"point" + i}>{point}</List.Item>
              ))}
            </List>
          </div>
        </div>
      </List>
    ));
  }
  render() {
    return this.renderItems();
  }
}
