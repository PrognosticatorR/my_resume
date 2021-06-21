import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import "./styles.css";

export default class Info extends Component {
  render() {
    return (
      <div style={{ paddingBottom: 30 }}>
        <Grid>
          <Grid.Row>
            <Grid.Column width="11">
              <p className="username header_text">Devesh Rawat</p>
              <p className="contact_info" style={{ paddingLeft: 10 }}>
                Sr. Software Engineer
              </p>
            </Grid.Column>
            <Grid.Column width="5">
              <div style={{ padding: 20 }}>
                <p className="contact_info">Flat no. B-302, Bellandur,</p>
                <p className="contact_info">Bengaluru, 560103.</p>
                <p className="contact_info">+918955333900, +919116612054</p>
                <p className="contact_info">devsrawt@gmail.com</p>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
