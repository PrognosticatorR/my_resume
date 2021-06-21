import React, { Component } from "react";
import { data, education } from "../data/content";
import ContentItem from "../components/ContentItem";

class Content extends Component {
  renderEdu() {
    return education.map(({ id, title, duration }) => (
      <div key={id + title}>
        <p style={{ fontSize: 20, margin: 0 }}>{title}</p>
        <span>{duration}</span>
      </div>
    ));
  }
  render() {
    return (
      <>
        <div>
          <h3
            className="header_text"
            style={{ fontSize: "1.8rem", fontWeight: 300 }}
          >
            ABOUT
          </h3>
          <p style={{ fontSize: 16 }}>
            I'm a full-stack developer with more than 4 years of well-rounded
            experience in web development, with a good understanding of DevOps.
            I am passionate about world-class web products and code practices.
          </p>
          <h3
            style={{ fontSize: "1.8rem", fontWeight: 300 }}
            className="header_text"
          >
            EXPERIENCE
          </h3>
          <ContentItem data={data} />
          <div>
            <h3
              style={{ fontSize: "1.8rem", fontWeight: 300 }}
              className="header_text"
            >
              EDUCATION
            </h3>
            {this.renderEdu()}
          </div>
        </div>
      </>
    );
  }
}

export default Content;
