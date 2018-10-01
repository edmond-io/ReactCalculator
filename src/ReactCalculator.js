// src/ReactCalculator.js

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import Style from './Style';
import InputButton from './InputButton';

// Define arrangement of input buttons
const inputButtons = [
  [7, 8, 9, '*'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0,'.','/', '=']
];

class ReactCalculator extends Component {

  constructor(props){
    super(props);

    this.state = {
      inputValue: 0,
      previousInputValue: 0,
      selectedSymbol: null
    }
  }

  render(){

    return (
      <View style={Style.rootContainer}>

        <View style={Style.displayContainer}>
          <Text style={Style.displayContainerText}>
            {this.state.inputValue}
          </Text>
        </View>
        <View style={Style.inputContainer}>
          {this._renderInputButtons()}
        </View>

      </View>
    )
  }

  /**
   * For each row in `inputButtons`, create a row View
   * and add create an InputButton for each input in the row.
   */
  _renderInputButtons() {
      let views = [];

      // each row
      for (var r = 0; r < inputButtons.length; r ++) {
          let row = inputButtons[r];

          let inputRow = [];
          // each button
          for (var btn = 0; btn < row.length; btn++) {
              let input = row[btn];

              inputRow.push(
                  <InputButton
                      value={input}
                      key={r + "-" + btn}
                      onPress={this._onInputButtonPressed.bind(this, input)}
                      highlight={this.state.selectedSymbol === input}/>
              );
          }

          views.push(<View style={Style.inputRow}
                key={"row-" + r}>{inputRow}</View>)
      }

      return views;
  }

  /**
   * Handler for a button clicked
   */
   _onInputButtonPressed(input) {
     switch (typeof input){
       case 'number':
        return this._handleNumberInput(input);
      case 'string':
        return this._handleArithemetricOperation(input);
     }
   }

  /**
   * Handler for displaying number input
   */
   _handleNumberInput(num){
     let inputValue = this.state.inputValue;

     // wrap it to zero
     if(isNaN(inputValue)){
       inputValue = 0;
     }

     let displayValue = (inputValue * 10) + num;
     this.setState({
       inputValue: displayValue
     })
   }


   /**
    * Handler for arithemetric opertation
    */
    _handleArithemetricOperation(ops){
      switch(ops){
        case "+":
        case "-":
        case "*":
        case "/":
          //if ()

          this.setState({
            inputValue: "",
            previousInputValue: this.state.inputValue,
            selectedSymbol: ops
          });
          console.log(this.state);
          break;

        case "=":
          let answer = this._calculateAnswer();

          if(answer === false){
            break;
          }

          this.setState({
            inputValue: answer,
            //previousInputValue: this.state.inputValue,
            // keep the selectedSymbol
          });
          console.log(this.state, "=", answer);
          break;
      }

    }

    /**
    * Calculate Answer
    **/
    _calculateAnswer(){
      let operation = this.state.selectedSymbol,
          prev = this.state.previousInputValue,
          next = this.state.inputValue;

      // break if no symbol pressed or no inputValue received
      if(!operation || isNaN(next)) {
        console.log("break if no symbol pressed or no inputValue received");
        return false;
      }

      switch(operation){
        case "+":
          return prev + next;
        case "-":
          return prev - next;
        case "*":
          return prev * next;
        case "/":
          return prev / next;
      }
    }

}

AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator);
