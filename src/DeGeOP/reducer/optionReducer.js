/*
File: src/DeGeOP/reducer/optionReducer.js
Autore: Giovanni Prete
Creazione: 20170329
Funzione: reducer che agisce sulle options
*/

/**
 * @author Giovanni Prete <giovanni.prete.1@studenti.unipd.it>
 * @description 2017-03-29
 * @version 0.0.1
 * @param {object} action - The action to be executed on the store
 * @return {Object} newList - The new asset list to be returned
 * @description Change the options state and return the new state as an object
 * @memberof DeGeOP::Reducer
 */
export const optionReducer = function optionReducer(optionList = {}, action) {
  const newList = { ...optionList, ...action.payload };
  return newList;
};
