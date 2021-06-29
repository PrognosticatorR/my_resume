import { Grid } from "semantic-ui-react";
import Content from "./containers/Content";
import SideBar from "./containers/SideBar";
import Info from "./containers/Info";
import "./App.css";
import "./containers/styles.css";

function App() {
  return (
    <div style={{ width: "82%", margin: "auto", padding: 40 }}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Info />
          </Grid.Column>
          <Grid.Column width={11}>
            <Content />
          </Grid.Column>
          <Grid.Column width={5}>
            <SideBar />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
