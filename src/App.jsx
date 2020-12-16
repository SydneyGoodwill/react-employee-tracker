//import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import employees from "./employees.json";

// const Application = () => {
//   return (
//     <div className="text-center">
//       <h1>Employee Directory</h1>

//       <Table data={employees} />


//     </div>
//   );

//   //ReactDOM.render(<App />, document.getElementById('app'));
// }
const sortTypes = {
  up: {
    class: 'sort-up',
    fn: (a, b) => a.employee.name.first - b.employee.name.first
  },
  down: {
    class: 'sort-down',
    fn: (a, b) => b.employee.name.first - a.employee.name.first
  },
  default: {
    class: 'sort',
    fn: (a, b) => a
  }
}

const Table = () => (
  <div>
    <Table data={employees} />
  </div>
);

class App extends Component {
  state = {
    employees
  }
  onSortChange = () => {
    const { employees } = this.state;
    let nextSort;
    
    if (employees === 'down') nextSort = 'up';
    else if (employees === 'up') nextSort = 'default';
    else if (employees === 'default') nextSort = 'down';
    
    this.setState({
      employees: nextSort
    })
  }
  
  render() {
    const { data } = this.props.employees;
    const { employees } = this.state;
    console.log(this.props);
    
    return (
      data.length > 0 && (
        <table className="text-left" id="employeeTable">
          <tr>
            <th>
              <button onClick={this.onSortChange}>
                <i className={`fas fa-${sortTypes[employees].class}`} />
                Firstname</button></th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
          {[...data].sort(sortTypes[employees].fn).map(employee => (
            <tr>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.email}</td>
              <td>{employee.gender}</td>
            </tr>
          ))}
        </table>
      )
      )
    }
  }
  


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

  //   render() {
  //     return (
  //       <div>
  // <h1>Employee Directory</h1>
  //         <table id="employeeTable">
  //           <tr>
  //             <th>
  //               <button onClick={this.nameButton}>Firstname</button></th>
  //             <th>Lastname</th>
  //             <th>Email</th>
  //             <th>Gender</th>
  //           </tr>
  //           {this.state.employees.results.map(employee => (
  //             <tr>
  //               <td>{ employee.name.first}</td>
  //               <td>{ employee.name.last}</td>
  //               <td>{ employee.email}</td>
  //               <td>{ employee.gender}</td>
  //             </tr>
  //           ))}
  //         </table>
  //       </div>
  //     )
  //   }
  // }


export default App;