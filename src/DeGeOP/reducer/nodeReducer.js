/*
File: src/DeGeOP/reducer/nodeReducer.js
Autore: Giovanni Prete
Creazione: 20170322
Modifica: 20170325
Funzione: reducer che agisce sui nodi
*/

import { Node } from '../store/process/node';
import { addNode } from './addNode';

/**
 * @author Giovanni Prete <giovanni.prete.1@studenti.unipd.it>
 * @description 20170322
 * @version 0.0.1
 * @memberof DeGeOP::Reducer
 * @function
 * @param {Node[]} nodeList - The current list of nodes in the store
 * @param {object} action - The action to be executed on the store
 * @return {Node[]} newList - The new node list to be returned
 * @description Execute the action on the current list of nodes of the store and return the new list
 */

export const nodeReducer = function nodeReducer(nodeList = [], action) {
  let newList = [];

  switch (action.operation) {
    case 'INSERT':
      if (Node.nodeIsValid(action.payload)) {
        newList = [...nodeList, addNode(action.payload)];
      } else {
        newList = nodeList;
      }
      break;

    case 'UPDATE':
      if (Node.nodeIsValid(action.payload)) {
        newList = nodeList.map(function (node) {
          if (node.uuid !== action.payload.uuid) {
            return node;
          }
          return addNode(action.payload);
        });
      } else {
        newList = nodeList;
      }
      break;

    case 'DELETE':
      newList = nodeList.filter(function (node) {
        return (node.uuid !== action.payload.uuid);
      });
      break;

    default:
      newList = nodeList;
      break;
  }

  return newList;
};
