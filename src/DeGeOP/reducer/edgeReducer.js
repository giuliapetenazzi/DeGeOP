/*
File: src/DeGeOP/reducer/edgeReducer.js
Autore: Giovanni Prete
Creazione: 20170322
Modifica: 20170325
Funzione: reducer che agisce sugli edge
*/

import { Edge } from '../store/process/edge';


/**
 * @function
 * @author Giovanni Prete <giovanni.prete.1@studenti.unipd.it>
 * @description 20170322
 * @version 0.0.1
 * @memberof DeGeOP::Reducer
 * @param {Edge[]} edgeList - The current list of edges in the store
 * @param {object} action - The action to be executed on the store
 * @return {Edge[]} newList - The new edge list to be returned
 * @description Execute the action on the current list of edges of the store and return the new list
 */
export const edgeReducer = function edgeReducer(edgeList = [], action) {
  let newList = [];

  switch (action.operation) {
    case 'INSERT':
      newList = [...edgeList, new Edge(action.payload)];
      break;

    case 'UPDATE':
      newList = edgeList.map(function (edge) {
        if (edge.uuid !== action.payload.uuid) {
          return edge;
        }
        return new Edge(action.payload);
      });
      break;

    case 'DELETE':
      newList = edgeList.filter(function (edge) {
        return (edge.uuid !== action.payload.uuid);
      });
      break;

    default:
      newList = edgeList;
      break;
  }

  return newList;
};
