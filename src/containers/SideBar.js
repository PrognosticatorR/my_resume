import React, { Component } from "react";
import SideBarItems from "../components/SidebarItem";
import { Skills } from "../data/sidebarItem";
import { List } from "semantic-ui-react";

class SideBar extends Component {
  render() {
    return (
      <>
        <div>
          <h3
            style={{ fontSize: "1.8rem", fontWeight: 300 }}
            className="header_text"
          >
            SKILLS
          </h3>
          <SideBarItems data={Skills} />
        </div>
        <div style={{ marginTop: 25, marginBottom: 25, fontSize: 18 }}>
          <h3
            style={{ fontSize: "1.8rem", fontWeight: 300 }}
            className="header_text"
          >
            PROFILES
          </h3>
          <div style={{ marginLeft: 15 }}>
            <List ordered>
              <List.Item>
                <a
                  href="https://stackoverflow.com/users/8291111/devesh"
                  target="blank"
                >
                  Stack Overflow
                </a>
              </List.Item>
              <List.Item>
                <a href="https://github.com/deveshrawat" target="blank">
                  GitHub
                </a>
              </List.Item>
              <List.Item>
                <a
                  href="https://www.linkedin.com/in/devesh-rawat/"
                  target="blank"
                >
                  LinkedIn
                </a>
              </List.Item>
            </List>
          </div>
        </div>
        <div>
          <h3
            style={{ fontSize: "1.8rem", fontWeight: 300 }}
            className="header_text"
          >
            LENGUAGES
          </h3>
          <div style={{ marginLeft: 15, fontSize: 18 }}>
            <List bulleted>
              <List.Item>English</List.Item>
              <List.Item>Hindi</List.Item>
            </List>
          </div>
        </div>
      </>
    );
  }
}

export default SideBar;
