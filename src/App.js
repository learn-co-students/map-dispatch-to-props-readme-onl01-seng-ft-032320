import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick() {
    this.props.addItem()
  }

  render() {
    debugger
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};
// the two functions below accomplish the same thing and allow me to use #1 in the connect below. #1 is an anonymous arrow function that handles everything in one line

// 1.// state => ({ items: state.items })

// 2.// const mapStateToProps = (state) => {
//   return {
//     items: state.items
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   };
// };
export default connect(state => ({ items: state.items }),{ addItem })(App);
