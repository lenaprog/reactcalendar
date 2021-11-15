import React from "react";
import './App.css';
import Day from './components/Day';
//import Month from './components/Month';
import Header from './components/Header';
import {ButtonNext, ButtonPrev} from './components/Button';
import Dates from './components/Dates';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      week: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      months: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      dates: [1,2,3,4,5,6,7,8,9,10,11,12,1,3,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
      currentMonth: new Date().getMonth(),
      activeMonth: ""
    }
    
    /*this.clickNextMonth = this.clickNextMonth.bind(this)*/
    this.getCurrentMonth = this.getCurrentMonth.bind(this)
  }

  componentDidMount () {
    this.getCurrentMonth()
  }


  getCurrentMonth = () => {
    const current = this.state.months.filter((month, index) => index === this.state.currentMonth)
    console.log("current", current[0])
    this.setState ({activeMonth: current[0]})

  }

 clickNextMonth= () => {
   this.setState({currentMonth: this.state.currentMonth+1});
 }

 clickPrevMonth = () => {
   this.setState({currentMonth: this.state.currentMonth-1});
 }

  getWeekDays = () => {
    return <Day day={this.state.week}/>
    
  }

  getDates = () => {
    return <Dates date={this.state.dates} />
  }
  

  render() {

    console.log("in render", this.state.currentMonth)

    return (
      <div className="App">
        <h2>Calendar</h2>
        <Header active={this.state.activeMonth}/>
        <ButtonPrev onButtonClick={this.clickPrevMonth} />
        <ButtonNext onButtonClick={this.clickNextMonth}/>
        {this.getWeekDays()}
        {this.getDates()}

      </div>
    );
  }
}


export default App;
