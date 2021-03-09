import React from 'react';
import {connect} from 'react-redux'
import AddCounter from "./AddCounter";
import Counter from "./Counter";
import './App.css';


function App( {counters} ) {

  const initialCounters = [...counters];
  const DisplayCounters = initialCounters.map(counter => (<Counter counter={counter} key={counter.id}/>));
  
  return (
    <div>
      <AddCounter/>
      {DisplayCounters}
    </div>
  );

}

const mapStateToProps = (state) => {
  return {
    counters: state.counters
  }
}

export default connect(mapStateToProps, null)(App);