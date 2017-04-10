/*
File: src/DeGeOP/reducer/reducer.js
Autore: Giovanni Prete
Creazione: 20170322
Modifica: 20170329
Funzione: reducer principale
*/

import { assetReducer } from './assetReducer';
import { edgeReducer } from './edgeReducer';
import { nodeReducer } from './nodeReducer';
import { optionReducer } from './optionReducer';

/**
 * @namespace DeGeOP::Reducer
 */

/**
 * @function
 * @memberof DeGeOP::Reducer
 * @param  {Object} obj
 * @return {boolean} Il metodo restituisce true solamente se il campo dell'oggetto
 *  è definito ma non ha campi dati
 */
const objectIsEmpty = function objectIsEmpty(obj) {
  if (Object.keys(obj).length === 0) {
    return true;
  }
  return false;
};

/**
 * @author Giovanni Prete <giovanni.prete.1@studenti.unipd.it>
 * @description 20170322
 * @version 0.0.1
 * @memberof DeGeOP::Reducer
 * @function
 * @param {object} state - The current state of the store
 * @param {object} action - The action to be executed on the store
 * @return {object} newState - The new state to be returned
 * @description Execute the action on the current state of the store and return the new state
 */

export const reducer = function reducer(state = {}, action) {
  let newState;

  switch (action.type) {
    case 'ASSET':
      if (objectIsEmpty(action.payload)) {
        newState = state;
      } else {
        newState = {
          ...state,
          assets: assetReducer(state.assets, action),
        };
      }
      break;

    case 'NODE':
      if (objectIsEmpty(action.payload)) {
        newState = state;
      } else {
        newState = {
          ...state,
          nodes: nodeReducer(state.nodes, action),
        };
      }
      break;

    case 'EDGE':
      if (objectIsEmpty(action.payload)) {
        newState = state;
      } else {
        newState = {
          ...state,
          edges: edgeReducer(state.edges, action),
        };
      }
      break;

    case 'OPTION':
      newState = {
        ...state,
        options: optionReducer(state.options, action),
      };
      break;

    default:
      newState = state;
      break;
  }
  return newState;
};
