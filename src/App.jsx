import { render } from '@testing-library/react';
import react, { Component } from 'react';
import './App.css';
import employees from "./employees.json";

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

class App extends Component {
  state = {
    employees
  }

  nameButton = () => {
    console.log("button clicked");
}


  render() {
    return (
      <div>

        <table>
          <tr>
            <th>
              <button onClick={this.nameButton}>Firstname</button></th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
          {this.state.employees.results.map(employee => (
            <tr>
              <td>{ employee.name.first}</td>
              <td>{ employee.name.last}</td>
              <td>{ employee.email}</td>
              <td>{ employee.gender}</td>
            </tr>
          ))}
        </table>
      </div>
    )
  }
}

export default App;
