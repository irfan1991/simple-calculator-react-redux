import React , {Component}from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import '../App.css';
import ButtonList from "../containers/ButtonList";
import History from "../containers/History";
import Screen from "../containers/Screen";

class App extends Component{
  render(){
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="mt-4">
          <h3> <i  className="fa fa-calculator"/>  Example Calculator REACT REDUX</h3>
          </div>
          <div className="col-sm-8">
            <Screen />
          </div>

          <div className="col-sm-8">
            <h5>Buttons</h5>
            <ButtonList />
          </div>

          <div className="col-sm-4">
            <History />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
