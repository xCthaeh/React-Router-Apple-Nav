import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SubNav from "./components/SubNav";
import data from "./data";

class App extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.setState({
      data: data
    });
  }

  render() {
    return (
      <div className="app">
        <div className="navbar-wrapper">
          <NavBar data={this.state.data} />
        </div>
        <div className="subnav-wrapper">
          {this.state.data.map(link => (
            <Route
              key={link.id}
              path={`/${link.name.toLowerCase()}`}
              render={props => <SubNav {...props} link={link} />}
            />
          ))}
        </div>
        <div className="fancyfooter">
          <p>Fancy Apple Footer Here</p>
        </div>
      </div>
    );
  }
}

export default App;
