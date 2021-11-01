import React from "react";
import './App.css';
import Day from './components/Day';
import Month from './components/Month';
import Header from './components/Header';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      week: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      months: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      currentMonth: new Date().getMonth()
    }
  }



  getCurrentMonth = () => {
    const current = this.state.months.filter((month, index) => index === this.state.currentMonth)
    return <Header current={current[0]} />



  }

  render() {

    console.log(this.getCurrentMonth())
    return (
      <div className="App">
        <h2>Calendar</h2>
        {this.getCurrentMonth()}


      </div>
    );
  }
}

export default App;
