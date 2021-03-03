import React, { Component } from "react";
import AddingAndUsingRadiumChildC from "./AddingAndUsingRadiumChildC";

class AddingAndUsingRadiumParentC extends Component {
  state = {
    person: [
      { id: "khwaja1", name: "khwaja", age: 27 },
      { id: "khwaja2", name: "Junaid", age: 28 },
      { id: "khwaja3", name: "Dilshad", age: 29 },
      { id: "khwaja4", name: "Sulaiman", age: 30 },
      { id: "khwaja5", name: "Saleem", age: 31 },
    ],
  };
  showPerson;
  toggleNameHandler = () => {
    const isShow = this.state.showPerson;
    this.setState({ showPerson: !isShow });
  };
  switchNameHandler = () => {
    this.setState({
      person: [
        { name: "khwaja Muhammad", age: 27 },
        { name: "Junaid Lala", age: 28 },
        { name: "Dilshad Khan", age: 29 },
        { name: "Sulaiman Chause", age: 30 },
        { name: "Saleem Shaikh", age: 31 },
      ],
    });
  };
  deleteStateHandler = (personDataIndex) => {
    const personData = this.state.person;
    personData.splice(personDataIndex, 1);
    this.setState({ personData: personData });
  };
  render() {
    const buttonStyle = {
      backgroundColor: "yellow",
    };

    let displayPersonData = null;
    if (this.state.showPerson) {
      displayPersonData = (
        <div>
          {this.state.person.map((item, index) => {
            return (
              <AddingAndUsingRadiumChildC
                name={item.name}
                age={item.age}
                delete={() => this.deleteStateHandler(index)}
              />
            );
          })}
          <button onClick={this.switchNameHandler} className="mt-2">
            Change State
          </button>
        </div>
      );
      buttonStyle.backgroundColor = "pink";
    }

    // let classes = ["para-weight", "red"].join(" ");// default:-  dynamic applying css
    // OR
    let classes = [];
    if (this.state.person.length <= 2) {
      classes.push("para-color");
    }
    if (this.state.person.length <= 1) {
      classes.push("para-wedth");
    }

    return (
      <div>
        <p className={classes.join(" ")}> 3. Adding & Using Radium</p>
        <button onClick={this.toggleNameHandler} style={buttonStyle}>
          Added Redium
        </button>
        {displayPersonData}
      </div>
    );
  }
}
export default AddingAndUsingRadiumParentC;
