//import { render } from '@testing-library/react';
//import React, { Component } from 'react';
import React, { Component } from 'react';
import './App.css';
import employees from "./employees.json";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/InputGroup";

class App extends Component {
  state = {
    employees: employees.results
  }

  sorting = () => {
    const employees = this.state.employees.sort(function (a, b) {
      if (a.name.first < b.name.first) { return -1; }
      if (a.name.first > b.name.first) { return 1; }
      return 0;
    })
    console.log(employees);
    this.setState({ employees })
  };

  render() {

    return < div className="text-center" >
      <h1>Employee Directory</h1>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <table id="employeeTable">
        <tr>
          <th>
            <button onClick={this.sorting}>Firstname</button></th>
          <th>Lastname</th>
          <th>Email</th>
          <th>Gender</th>
        </tr>
        {this.state.employees.map(employee => (
          <tr>
            <td>{employee.name.first}</td>
            <td>{employee.name.last}</td>
            <td>{employee.email}</td>
            <td>{employee.gender}</td>
          </tr>
        ))}
      </table>
    </div >
  }
}



//   </div>
// );


//ReactDOM.render(<App />, document.getElementById('app'));

// const sortTypes = {
//   up: {
//     class: 'sort-up',
//     fn: (a, b) => a.employee.name.first - b.employee.name.first
//   },
//   down: {
//     class: 'sort-down',
//     fn: (a, b) => b.employee.name.first - a.employee.name.first
//   },
//   default: {
//     class: 'sort',
//     fn: (a, b) => a
//   }
// }

// const Table = () => (
//   <div>
//     <Table data={employees} />
//   </div>
// );

//   onSortChange = () => {
//     const { employees } = this.state;
//     let nextSort;

//     if (employees === 'down') nextSort = 'up';
//     else if (employees === 'up') nextSort = 'default';
//     else if (employees === 'default') nextSort = 'down';

//     this.setState({
//       employees: nextSort
//     })
//   }

//   render() {
//     const { data } = employees.name.first;
//     const { employees } = this.state;
//     console.log(this.props);

//     return (
//       data.length > 0 && (
//         <table className="text-left" id="employeeTable">
//           <tr>
//             <th>
//               <button onClick={this.onSortChange}>
//                 <i className={`fas fa-${sortTypes[employees].class}`} />
//                 Firstname</button></th>
//             <th>Lastname</th>
//             <th>Email</th>
//             <th>Gender</th>
//           </tr>
//           {[...data].sort(sortTypes[employees].fn).map(employee => (
//             <tr>
//               <td>{employee.name.first}</td>
//               <td>{employee.name.last}</td>
//               <td>{employee.email}</td>
//               <td>{employee.gender}</td>
//             </tr>
//           ))}
//         </table>
//       )
//       )
//     }
//   }



// nameButton = () => {
//   console.log("button clicked");
//   let fa = this.state.employees.results.toLowerCase();
//   let fb = this.state.employees.results.toLowerCase();
//   if (fa < fb) {
//     return -1;
//   }
//   if (fa > fb) {
//     return 1;
//   }
//   return 0;

// };
export default App;