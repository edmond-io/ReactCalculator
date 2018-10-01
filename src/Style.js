// src/Style.js

import {
  StyleSheet
} from 'react-native';

var Style = StyleSheet.create({
  /*
   * Root Container
   */
  rootContainer: {
    flex: 1,
  },

  /*
   * Display Container
   */
  displayContainer: {
    flex: 2,
    backgroundColor: '#193441',
    justifyContent: 'center'
  },

  displayContainerText: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'right',
    padding: 20
  },

  /*
   * Input Container
   */
  inputContainer: {
    flex: 8,
    backgroundColor: '#3e606f'
  },

  inputRow: {
    flex: 1,
    flexDirection: 'row'
  },

  inputButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#91aa9d',
  },

  inputButtonHighlighted: {
    backgroundColor: '#193441'
  },

  inputButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white'
  },

  /*
  * General Area
  */
});

export default Style;
