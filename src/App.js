import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import ModeDetails from './ModeDetails'
import { connect } from 'react-redux';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  data = [
    {
      name: "Ivel Z3",
      manufacturer: "Ivasim",
      year: 1969,
      origin: "Croatia"
    },
    {
      name: "Bally Astrocade",
      manufacturer: "Bally Consumer Products",
      year: 1977,
      origin: "USA"
    },
    {
      name: "Sord M200 Smart Home Computer",
      manufacturer: "Sord Computer Corporation",
      year: 1971,
      origin: "Japan"
    },
    {
      name: "Commodore 64",
      manufacturer: "Commodore",
      year: 1982,
      origin: "USA"
    }
  ]
  selectComputer=(computer)=>{
    this.props.dispatch({
      type: 'ADD_MODEL',
      payload: computer
  })

  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    store.dispatch({
      type: 'ADD_MODEL',
      payload: this.state.value
  })
  }
  

  render(){
  return (
    <Provider store ={store}>
       <div className="App">
         <ModeDetails computers={this.props.computer} />
         <form onSubmit={this.handleSubmit}>
        <select value ={this.state.value} onChange ={this.handleChange}>
          <option value="">-- pick a model --</option>
          {this.data.map(computer => {
            return (<option key={computer.name} value = {`name: ${computer.name},manufacturer: ${computer.manufacturer} year: ${computer.year},origin: ${computer.origin}`}>
              {computer.name} ({computer.year})
            </option>)
            })}
        </select>
        <input type="submit" value="Add" />
        </form>
      </div>
    </Provider>
  ) 
  
    }
   
  }
  const mapStateToProps = (state) => {
    return {
      computers: state.computers
    } 
  }

connect (mapStateToProps)(App)
export default App
