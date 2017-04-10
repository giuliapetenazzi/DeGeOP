/*
File: src/DeGeOP/reducer/addNode.js
Autore: Giovanni Prete
Creazione: 20170405
Modifica: 20170405
Funzione: ritorna la corretta tipologia di nodo a seconda del payload
*/

import { Node } from '../store/process/node';
import { ExitNode } from '../store/process/exitNode';
import { MachineNode } from '../store/process/machineNode';
import { QueueNode } from '../store/process/queueNode';
import { ResourceNode } from '../store/process/resourceNode';
import { SourceNode } from '../store/process/sourceNode';

/**
 * @author Giovanni Prete <giovanni.prete.1@studenti.unipd.it>
 * @description 201700405
 * @version 0.0.1
 * @memberof DeGeOP::Reducer
 * @function
 * @param {payload} object - l'oggetto da cui creare il nodo
 * @return {Node} il nodo della corretta tipologia
 * @description Crea il nodo della corretta tipologia a partire da un oggetto
 */

export const addNode = function addNode(payload) {
  switch (payload.type) {
    case '1':
      return new ExitNode(payload);
    case '2':
      return new MachineNode(payload);
    case '3':
      return new QueueNode(payload);
    case '5':
      return new SourceNode(payload);
    case '6':
      return new ResourceNode(payload);
    default:
      return new Node(payload);
  }
};
